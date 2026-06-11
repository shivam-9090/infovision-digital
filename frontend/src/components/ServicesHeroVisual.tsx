import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Signal {
  x: number;
  z: number;
  y: number;
  speed: number;
  direction: number; // 1 = up, -1 = down
}

const ArchitectureStack: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const signalsRef = useRef<THREE.Points>(null);
  const signalsGeometryRef = useRef<THREE.BufferGeometry>(null);

  const signalCount = 14;
  const gridCoords = useMemo(() => [-1.2, 0, 1.2], []);
  const topY = 1.6;
  const midY = 0.0;
  const botY = -1.6;

  // Track mouse position for parallax
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth) - 0.5;
      mouseY.current = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Pre-calculate horizontal lines for each layer
  const buildGridLines = (y: number) => {
    const coords = [
      // Row lines
      -1.2, y, 1.2,  0, y, 1.2,
      0, y, 1.2,     1.2, y, 1.2,
      -1.2, y, 0,    0, y, 0,
      0, y, 0,       1.2, y, 0,
      -1.2, y, -1.2, 0, y, -1.2,
      0, y, -1.2,    1.2, y, -1.2,
      
      // Column lines
      -1.2, y, 1.2,  -1.2, y, 0,
      -1.2, y, 0,    -1.2, y, -1.2,
      0, y, 1.2,     0, y, 0,
      0, y, 0,       0, y, -1.2,
      1.2, y, 1.2,   1.2, y, 0,
      1.2, y, 0,     1.2, y, -1.2
    ];
    return new Float32Array(coords);
  };

  const topGridLines = useMemo(() => buildGridLines(topY), []);
  const midGridLines = useMemo(() => buildGridLines(midY), []);
  const botGridLines = useMemo(() => buildGridLines(botY), []);

  // Pre-calculate vertical connection lines
  const verticalLines = useMemo(() => {
    const coords: number[] = [];
    gridCoords.forEach(x => {
      gridCoords.forEach(z => {
        coords.push(x, topY, z, x, botY, z);
      });
    });
    return new Float32Array(coords);
  }, [gridCoords]);

  // Static grid node points (27 in total)
  const nodePositions = useMemo(() => {
    const coords: number[] = [];
    const ys = [topY, midY, botY];
    ys.forEach(y => {
      gridCoords.forEach(x => {
        gridCoords.forEach(z => {
          coords.push(x, y, z);
        });
      });
    });
    return new Float32Array(coords);
  }, [gridCoords]);

  // Active signal particles
  const signals = useMemo<Signal[]>(() => {
    const temp: Signal[] = [];
    for (let i = 0; i < signalCount; i++) {
      temp.push({
        x: gridCoords[Math.floor(Math.random() * 3)],
        z: gridCoords[Math.floor(Math.random() * 3)],
        y: botY + Math.random() * (topY - botY),
        speed: 0.012 + Math.random() * 0.018,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }
    return temp;
  }, [gridCoords]);

  const signalPositions = useMemo(() => {
    return new Float32Array(signalCount * 3);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Tilt the overall group container with auto-orbit + mouse parallax
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        time * 0.06 + mouseX.current * 0.35,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        0.2 + Math.sin(time * 0.03) * 0.08 - mouseY.current * 0.25,
        0.05
      );
    }

    // Update dynamic signal positions
    const geom = signalsGeometryRef.current;
    if (geom) {
      const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;
      if (posAttr) {
        signals.forEach((sig, i) => {
          sig.y += sig.speed * sig.direction;
          
          if (sig.y > topY) {
            sig.y = botY;
            sig.x = gridCoords[Math.floor(Math.random() * 3)];
            sig.z = gridCoords[Math.floor(Math.random() * 3)];
          } else if (sig.y < botY) {
            sig.y = topY;
            sig.x = gridCoords[Math.floor(Math.random() * 3)];
            sig.z = gridCoords[Math.floor(Math.random() * 3)];
          }

          posAttr.setXYZ(i, sig.x, sig.y, sig.z);
        });
        posAttr.needsUpdate = true;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Static Layer Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.07}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.35}
        />
      </points>

      {/* 2. Top Grid Layer (Cyan) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[topGridLines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00f0ff"
          transparent={true}
          opacity={0.16}
          linewidth={1}
        />
      </lineSegments>

      {/* 3. Middle Grid Layer (Purple) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[midGridLines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#9d4edd"
          transparent={true}
          opacity={0.16}
          linewidth={1}
        />
      </lineSegments>

      {/* 4. Bottom Grid Layer (Blue) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[botGridLines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4d8dff"
          transparent={true}
          opacity={0.16}
          linewidth={1}
        />
      </lineSegments>

      {/* 5. Vertical Connection Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[verticalLines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.04}
          linewidth={1}
        />
      </lineSegments>

      {/* 6. Travelling Data Signals */}
      <points ref={signalsRef}>
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
          opacity={0.7}
        />
      </points>
    </group>
  );
};

const SceneCleanup = () => {
  const { scene } = useThree();
  useEffect(() => {
    return () => {
      scene.traverse((object) => {
        if (
          object instanceof THREE.Points ||
          object instanceof THREE.LineSegments ||
          object instanceof THREE.Mesh
        ) {
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

export const ServicesHeroVisual: React.FC = () => {
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
        camera={{ position: [0, 0, 6], fov: 42 }}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        frameloop={isRendering ? "always" : "never"}
        gl={{ antialias: false, alpha: true }}
      >
        <SceneCleanup />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 6, 2]} intensity={1} color="#4d8dff" />
        <ArchitectureStack />
      </Canvas>
    </div>
  );
};

export default ServicesHeroVisual;
