const reportMetric = (metric) => {
  const payload = {
    name: metric.name,
    value: Number(metric.value?.toFixed?.(2) ?? metric.value),
    rating: metric.rating,
    delta: Number(metric.delta?.toFixed?.(2) ?? metric.delta),
    path: window.location.pathname,
    id: metric.id,
    navigationType:
      performance.getEntriesByType("navigation")[0]?.type ?? "navigate",
    timestamp: Date.now(),
  };

  if (window.gtag) {
    window.gtag("event", metric.name, {
      value: payload.value,
      metric_id: payload.id,
      metric_delta: payload.delta,
      metric_rating: payload.rating,
      page_path: payload.path,
      non_interaction: true,
    });
  }

  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "web_vital", webVital: payload });
  }

  if (import.meta.env.DEV) {
    console.info("[web-vitals]", payload);
  }
};

const observeLCP = () => {
  if (!("PerformanceObserver" in window)) return;

  let latestEntry;

  const observer = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    latestEntry = entries[entries.length - 1];
  });

  observer.observe({ type: "largest-contentful-paint", buffered: true });

  const finalize = () => {
    if (!latestEntry) return;

    reportMetric({
      name: "LCP",
      value: latestEntry.startTime,
      delta: latestEntry.startTime,
      rating:
        latestEntry.startTime <= 2500
          ? "good"
          : latestEntry.startTime <= 4000
            ? "needs-improvement"
            : "poor",
      id: `lcp-${Math.random().toString(36).slice(2)}`,
    });

    observer.disconnect();
  };

  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      finalize();
    }
  });

  addEventListener("pagehide", finalize, { once: true });
};

const observeCLS = () => {
  if (!("PerformanceObserver" in window)) return;

  let clsValue = 0;

  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    }
  });

  observer.observe({ type: "layout-shift", buffered: true });

  const finalize = () => {
    reportMetric({
      name: "CLS",
      value: clsValue,
      delta: clsValue,
      rating:
        clsValue <= 0.1
          ? "good"
          : clsValue <= 0.25
            ? "needs-improvement"
            : "poor",
      id: `cls-${Math.random().toString(36).slice(2)}`,
    });

    observer.disconnect();
  };

  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      finalize();
    }
  });

  addEventListener("pagehide", finalize, { once: true });
};

const observeINP = () => {
  if (!("PerformanceObserver" in window)) return;

  let maxLatency = 0;

  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const latency = entry.duration;
      if (latency > maxLatency) {
        maxLatency = latency;
      }
    }
  });

  try {
    observer.observe({ type: "event", buffered: true, durationThreshold: 16 });
  } catch {
    return;
  }

  const finalize = () => {
    if (maxLatency === 0) {
      observer.disconnect();
      return;
    }

    reportMetric({
      name: "INP",
      value: maxLatency,
      delta: maxLatency,
      rating:
        maxLatency <= 200
          ? "good"
          : maxLatency <= 500
            ? "needs-improvement"
            : "poor",
      id: `inp-${Math.random().toString(36).slice(2)}`,
    });

    observer.disconnect();
  };

  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      finalize();
    }
  });

  addEventListener("pagehide", finalize, { once: true });
};

export const setupWebVitals = () => {
  observeLCP();
  observeCLS();
  observeINP();
};
