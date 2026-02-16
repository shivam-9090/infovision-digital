import React, { useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stars, Environment, Float } from "@react-three/drei";

const Model = memo((props) => {
  // Load from public/model for production compatibility (Netlify/Vite build)
  const { scene } = useGLTF("/model/neptune.glb");
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Medium speed continuous 360° rotation in one direction (Y-axis)
      modelRef.current.rotation.y += delta * 0.15;
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
});

Model.displayName = "Model";

export const SpaceBackground = memo(() => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "#050505",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.25]} // Limit pixel ratio for performance
        frameloop="always" // Continuous rendering for animations
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
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

        <Stars
          radius={100}
          depth={50}
          count={1200}
          factor={4}
          saturation={0}
          fade
          speed={0.6}
        />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Model position={[2, 0, -1]} scale={0.008} rotation={[0.2, 0, 0]} />
        </Float>

        <Environment preset="night" />
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

// Preload the model
useGLTF.preload("/model/neptune.glb");
