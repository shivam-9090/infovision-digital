const RECOVERY_PREFIX = "iv-route-recovery:";
const TRANSIENT_ERROR = /loading chunk|dynamically imported module|failed to fetch|importing a module script|is not a function|modulepreload/i;

const recoverOnce = (reason) => {
  const key = `${RECOVERY_PREFIX}${window.location.pathname}`;
  if (sessionStorage.getItem(key)) return false;
  sessionStorage.setItem(key, `${Date.now()}:${reason}`);
  window.location.reload();
  return true;
};

export const installRouteRecovery = () => {
  window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault();
    recoverOnce("vite-preload");
  });

  window.addEventListener("unhandledrejection", (event) => {
    const message = String(event.reason?.message || event.reason || "");
    if (TRANSIENT_ERROR.test(message)) recoverOnce("promise");
  });

  window.addEventListener("error", (event) => {
    const message = String(event.error?.message || event.message || "");
    if (TRANSIENT_ERROR.test(message)) recoverOnce("runtime");
  });
};

export const markRouteStable = (pathname) => {
  const key = `${RECOVERY_PREFIX}${pathname}`;
  window.setTimeout(() => sessionStorage.removeItem(key), 8000);
};
