import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Signal {
  pathIndex: number;
  progress: number;
  speed: number;
  size: number;
}

const PathwaySystem: React.FC = () => {
  const lineCount = 12;
  const signalCount = 18;
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null);
  const signalsGeometryRef = useRef<THREE.BufferGeometry>(null);
  const { viewport } = useThree();

  const width = viewport.width || 12;
  const height = viewport.height || 8;

  // 1. Generate static flowing network pathways (lines)
  const paths = useMemo(() => {
    const tempPaths: THREE.Vector3[][] = [];
    for (let i = 0; i < lineCount; i++) {
      const yOffset = (i / (lineCount - 1) - 0.5) * height * 1.3;
      const startX = -width * 0.8;
      const endX = width * 0.8;
      
      // Horizontal wave paths with some control points
      const points: THREE.Vector3[] = [];
      const steps = 5;
      for (let j = 0; j <= steps; j++) {
        const t = j / steps;
        const x = startX + t * (endX - startX);
        const y = yOffset + Math.sin(t * Math.PI * 2 + i) * 0.6;
        const z = -2 + Math.cos(t * Math.PI + i) * 1.5;
        points.push(new THREE.Vector3(x, y, z));
      }
      tempPaths.push(points);
    }
    return tempPaths;
  }, [width, height]);

  // Build the lines flat position buffer
  const linePositions = useMemo(() => {
    const coords: number[] = [];
    paths.forEach((points) => {
      for (let i = 0; i < points.length - 1; i++) {
        coords.push(
          points[i].x, points[i].y, points[i].z,
          points[i+1].x, points[i+1].y, points[i+1].z
        );
      }
    });
    return new Float32Array(coords);
  }, [paths]);

  // 2. Stateful signals traveling along the paths
  const signals = useMemo<Signal[]>(() => {
    const temp: Signal[] = [];
    for (let i = 0; i < signalCount; i++) {
      temp.push({
        pathIndex: Math.floor(Math.random() * lineCount),
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
        size: 0.06 + Math.random() * 0.08,
      });
    }
    return temp;
  }, []);

  const signalPositions = useMemo(() => {
    return new Float32Array(signalCount * 3);
  }, []);

  // Update signals position
  useFrame(() => {
    const signalsGeom = signalsGeometryRef.current;
    if (!signalsGeom) return;

    const positionsAttr = signalsGeom.getAttribute("position") as THREE.BufferAttribute;
    if (!positionsAttr) return;

    signals.forEach((sig, i) => {
      sig.progress += sig.speed;
      if (sig.progress >= 1) {
        sig.progress = 0;
        sig.pathIndex = Math.floor(Math.random() * lineCount);
      }

      const path = paths[sig.pathIndex];
      // Interpolate position along the segmented path
      const segmentCount = path.length - 1;
      const rawProgress = sig.progress * segmentCount;
      const segmentIndex = Math.floor(rawProgress);
      const segmentT = rawProgress - segmentIndex;

      const pStart = path[segmentIndex];
      const pEnd = path[segmentIndex + 1];

      if (pStart && pEnd) {
        const x = THREE.MathUtils.lerp(pStart.x, pEnd.x, segmentT);
        const y = THREE.MathUtils.lerp(pStart.y, pEnd.y, segmentT);
        const z = THREE.MathUtils.lerp(pStart.z, pEnd.z, segmentT);
        positionsAttr.setXYZ(i, x, y, z);
      }
    });
    positionsAttr.needsUpdate = true;
  });

  return (
    <>
      {/* Background Static Paths */}
      <lineSegments ref={linesGeometryRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4d8dff"
          transparent={true}
          opacity={0.12}
          linewidth={1}
        />
      </lineSegments>

      {/* Traveling Data Signals */}
      <points>
        <bufferGeometry ref={signalsGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[signalPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.14}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.5}
        />
      </points>
    </>
  );
};

const SceneCleanup = () => {
  const { scene } = useThree();
  useEffect(() => {
    return () => {
      scene.traverse((object) => {
        if (object instanceof THREE.Points || object instanceof THREE.LineSegments || object.isMesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => mat.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, [scene]);
  return null;
};

export const ContactHeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibility = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const isRendering = isInViewport && isTabActive;

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        frameloop={isRendering ? "always" : "never"}
        gl={{ antialias: false, alpha: true }}
      >
        <SceneCleanup />
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 5, 2]} intensity={1} color="#4d8dff" />
        <PathwaySystem />
      </Canvas>
    </div>
  );
};

export default ContactHeroVisual;
