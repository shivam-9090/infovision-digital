import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitNode {
  radius: number;
  speed: number;
  inclination: number;
  offset: number;
  position: THREE.Vector3;
}

const ConstellationSystem: React.FC = () => {
  const nodeCount = 18;
  const linesRef = useRef<THREE.LineSegments>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const width = viewport.width || 10;
  const height = viewport.height || 7;

  // Generate satellite nodes orbiting the central core
  const nodes = useMemo<OrbitNode[]>(() => {
    const temp: OrbitNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      temp.push({
        radius: 1.5 + (i / nodeCount) * 2.5, // Spread orbits out
        speed: 0.15 + Math.random() * 0.25,
        inclination: (Math.random() - 0.5) * Math.PI * 0.6, // Random orbit angle
        offset: Math.random() * Math.PI * 2,
        position: new THREE.Vector3(),
      });
    }
    return temp;
  }, []);

  const nodePositions = useMemo(() => {
    return new Float32Array(nodeCount * 3);
  }, []);

  const nodesGeometryRef = useRef<THREE.BufferGeometry>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const nodesGeom = nodesGeometryRef.current;
    const linesGeom = linesRef.current?.geometry;

    // Rotate core mesh slowly
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.12;
      coreRef.current.rotation.x = time * 0.06;
    }

    if (!nodesGeom) return;
    const positionsAttr = nodesGeom.getAttribute("position") as THREE.BufferAttribute;
    if (!positionsAttr) return;

    // Update satellite node positions along their orbits
    nodes.forEach((node, i) => {
      const theta = time * node.speed + node.offset;
      
      // Calculate spherical coordinates for orbit
      const x = Math.cos(theta) * node.radius;
      const y = Math.sin(theta) * node.radius * Math.sin(node.inclination);
      const z = Math.sin(theta) * node.radius * Math.cos(node.inclination);

      node.position.set(x, y, z);
      positionsAttr.setXYZ(i, x, y, z);
    });
    positionsAttr.needsUpdate = true;

    // Draw connection lines from the central core (0,0,0) to each satellite node
    if (linesGeom) {
      const coords: number[] = [];
      nodes.forEach((node) => {
        coords.push(
          0, 0, 0, // Core center
          node.position.x, node.position.y, node.position.z
        );
      });
      linesGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(coords), 3));
      linesGeom.computeBoundingSphere();
      linesGeom.computeBoundingBox();
    }
  });

  return (
    <>
      {/* Central Knowledge Core (Wireframe sphere) */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 12, 12]} />
        <meshBasicMaterial 
          color="#4d8dff" 
          wireframe={true} 
          transparent={true} 
          opacity={0.16} 
        />
      </mesh>

      {/* Orbiting Satellite Nodes */}
      <points>
        <bufferGeometry ref={nodesGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.15}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.5}
        />
      </points>

      {/* Connection Traces */}
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
          opacity={0.1}
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
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.LineSegments) {
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

export const BlogHeroVisual: React.FC = () => {
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
        <directionalLight position={[1, 5, 2]} intensity={0.8} color="#4d8dff" />
        <ConstellationSystem />
      </Canvas>
    </div>
  );
};

export default BlogHeroVisual;
