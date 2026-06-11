import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface WireframeBlock {
  position: THREE.Vector3;
  initialPos: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  scale: number;
  offset: number;
}

const WireframeSystem: React.FC = () => {
  const meshCount = 4;
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();

  const width = viewport.width || 10;
  const height = viewport.height || 7;

  // 1. Generate floating structural blocks
  const blocks = useMemo<WireframeBlock[]>(() => {
    const temp: WireframeBlock[] = [];
    const positions = [
      new THREE.Vector3(-width * 0.25, height * 0.15, -1),
      new THREE.Vector3(width * 0.25, -height * 0.15, 0),
      new THREE.Vector3(-width * 0.1, -height * 0.2, -2),
      new THREE.Vector3(width * 0.15, height * 0.25, -0.5),
    ];

    for (let i = 0; i < meshCount; i++) {
      temp.push({
        position: positions[i].clone(),
        initialPos: positions[i].clone(),
        rotationSpeed: new THREE.Vector3(
          0.005 + Math.random() * 0.005,
          0.005 + Math.random() * 0.005,
          0
        ),
        scale: 0.6 + Math.random() * 0.5,
        offset: Math.random() * 100,
      });
    }
    return temp;
  }, [width, height]);

  const blockRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const linesGeom = linesRef.current?.geometry;

    // Rotate and float blocks
    blocks.forEach((block, i) => {
      const mesh = blockRefs.current[i];
      if (mesh) {
        // Subtle floating
        block.position.x = block.initialPos.x + Math.sin(time * 0.2 + block.offset) * 0.4;
        block.position.y = block.initialPos.y + Math.cos(time * 0.2 + block.offset) * 0.4;
        block.position.z = block.initialPos.z + Math.sin(time * 0.3 + block.offset) * 0.2;

        mesh.position.copy(block.position);
        mesh.rotation.x += block.rotationSpeed.x;
        mesh.rotation.y += block.rotationSpeed.y;
      }
    });

    // Draw connection lines between block centers
    if (linesGeom) {
      const coords: number[] = [];
      for (let i = 0; i < meshCount; i++) {
        for (let j = i + 1; j < meshCount; j++) {
          const pStart = blocks[i].position;
          const pEnd = blocks[j].position;
          coords.push(
            pStart.x, pStart.y, pStart.z,
            pEnd.x, pEnd.y, pEnd.z
          );
        }
      }
      linesGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(coords), 3));
      linesGeom.computeBoundingSphere();
      linesGeom.computeBoundingBox();
    }
  });

  return (
    <>
      {/* Floating Wireframe blocks */}
      {blocks.map((block, idx) => (
        <mesh 
          key={idx} 
          ref={(el) => { if (el) blockRefs.current[idx] = el; }}
          scale={[block.scale, block.scale, block.scale]}
        >
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshBasicMaterial 
            color="#4d8dff" 
            wireframe={true} 
            transparent={true} 
            opacity={0.15} 
          />
        </mesh>
      ))}

      {/* Structural connection pathways */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(0), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#9d4edd"
          transparent={true}
          opacity={0.08}
          linewidth={1}
        />
      </lineSegments>
    </>
  );
};

const SceneCleanup = () => {
  const { scene } = useThree();
  useEffect(() => {
    return () => {
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
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

export const WorkHeroVisual: React.FC = () => {
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
        camera={{ position: [0, 0, 7], fov: 40 }}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        frameloop={isRendering ? "always" : "never"}
        gl={{ antialias: false, alpha: true }}
      >
        <SceneCleanup />
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 4, 1]} intensity={0.8} color="#4d8dff" />
        <WireframeSystem />
      </Canvas>
    </div>
  );
};

export default WorkHeroVisual;
