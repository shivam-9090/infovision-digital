import React, { useRef, memo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Stars, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const Model = memo((props) => {
  // Load from public/model for production compatibility (with Draco compression enabled)
  const { scene } = useGLTF("/model/neptune.glb", true);
  const modelRef = useRef();
  const accumRef = useRef(0);
  const fpsInterval = 1 / 60; // Target 60 FPS

  // Disable frustum culling recursively to prevent planet from disappearing near edges
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.frustumCulled = false;
        }
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      accumRef.current += delta;
      if (accumRef.current >= fpsInterval) {
        // Medium speed continuous 360° rotation in one direction (Y-axis)
        modelRef.current.rotation.y += accumRef.current * 0.15;
        accumRef.current = accumRef.current % fpsInterval;
      }
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
});

Model.displayName = "Model";

const SceneCleanup = () => {
  const { scene } = useThree();
  useEffect(() => {
    return () => {
      scene.traverse((object) => {
        if (object.isMesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => {
                // Dispose texture maps inside material
                Object.keys(mat).forEach((key) => {
                  if (mat[key] && typeof mat[key].dispose === "function") {
                    mat[key].dispose();
                  }
                });
                mat.dispose();
              });
            } else {
              Object.keys(object.material).forEach((key) => {
                if (object.material[key] && typeof object.material[key].dispose === "function") {
                  object.material[key].dispose();
                }
              });
              object.material.dispose();
            }
          }
        }
      });
    };
  }, [scene]);
  return null;
};

export const SpaceBackground = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    let lastWidth = window.innerWidth;
    
    const checkDevice = () => {
      const currentWidth = window.innerWidth;
      // Only update and re-render if the width has actually changed (prevents mobile scrollbar/address bar reflows)
      if (currentWidth !== lastWidth) {
        lastWidth = currentWidth;
        setIsMobile(currentWidth < 768);
      }
    };
    
    // Initial check
    setIsMobile(window.innerWidth < 768);
    
    window.addEventListener("resize", checkDevice);

    const handleVisibility = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", checkDevice);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: "#050505",
        transform: "translate3d(0, 0, 0)", // Force browser GPU compositing layer
        backfaceVisibility: "hidden",      // Prevent scroll-blink anomalies
        willChange: "transform",            // Optimizes rendering thread
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.25]} // Limit pixel ratio for performance
        frameloop={isTabActive ? "always" : "never"} // Suspend rendering when tab is hidden
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <SceneCleanup />

        <Stars
          radius={100}
          depth={50}
          count={isMobile ? 400 : 1200} // Reduce stars count on mobile
          factor={4}
          saturation={0}
          fade
          speed={0.6}
        />

        {!isMobile && (
          <>
            <ambientLight intensity={0.2} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.5}
              color="#4d8dff"
            />
            <pointLight
              position={[-10, -10, -10]}
              intensity={0.5}
              color="#9d4edd"
            />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <Model position={[2, 0, -1]} scale={0.008} rotation={[0.2, 0, 0]} />
            </Float>

            <Environment preset="night" />
          </>
        )}
      </Canvas>

      {/* Overlay gradient - very subtle */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 70% 50%, transparent 0%, rgba(5, 5, 5, 0.3) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
});

SpaceBackground.displayName = "SpaceBackground";

// Preload the model with Draco decoder enabled
useGLTF.preload("/model/neptune.glb", true);
