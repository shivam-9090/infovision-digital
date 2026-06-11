import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface NodePoint {
  position: THREE.Vector3;
  initialPos: THREE.Vector3;
  offset: number;
}

const NodeSystem: React.FC = () => {
  const count = 30;
  const connectionDistance = 6;
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();

  const nodes = useMemo(() => {
    const temp: NodePoint[] = [];
    const width = viewport.width || 12;
    const height = viewport.height || 8;

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * width * 1.3;
      const y = (Math.random() - 0.5) * height * 1.3;
      const z = (Math.random() - 0.5) * 4;
      const pos = new THREE.Vector3(x, y, z);
      temp.push({
        position: pos.clone(),
        initialPos: pos.clone(),
        offset: Math.random() * 100,
      });
    }
    return temp;
  }, [viewport.width, viewport.height]);

  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    nodes.forEach((node, i) => {
      posArray[i * 3] = node.position.x;
      posArray[i * 3 + 1] = node.position.y;
      posArray[i * 3 + 2] = node.position.z;
    });
    return posArray;
  }, [nodes]);

  const pointsGeometryRef = useRef<THREE.BufferGeometry>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pointsGeom = pointsGeometryRef.current;
    const linesGeom = linesGeometryRef.current;
    if (!pointsGeom || !linesGeom) return;

    const positionsAttr = pointsGeom.getAttribute("position") as THREE.BufferAttribute;
    const linePosAttr = linesGeom.getAttribute("position") as THREE.BufferAttribute;
    if (!positionsAttr || !linePosAttr) return;

    // Update node positions with a gentle wave drift
    nodes.forEach((node, i) => {
      node.position.x = node.initialPos.x + Math.sin(time * 0.15 + node.offset) * 0.6;
      node.position.y = node.initialPos.y + Math.cos(time * 0.15 + node.offset) * 0.6;
      node.position.z = node.initialPos.z + Math.sin(time * 0.2 + node.offset) * 0.3;

      positionsAttr.setXYZ(i, node.position.x, node.position.y, node.position.z);
    });
    positionsAttr.needsUpdate = true;

    // Calculate lines between nearby nodes
    const lineCoords: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < connectionDistance) {
          lineCoords.push(
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          );
        }
      }
    }

    const linePosArray = new Float32Array(lineCoords);
    linesGeom.setAttribute("position", new THREE.BufferAttribute(linePosArray, 3));
    linesGeom.computeBoundingSphere();
    linesGeom.computeBoundingBox();
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry ref={pointsGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.12}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.4}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry ref={linesGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(0), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4d8dff"
          transparent={true}
          opacity={0.15}
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

export const AboutHeroVisual: React.FC = () => {
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
        <directionalLight position={[5, 5, 2]} intensity={1} color="#4d8dff" />
        <NodeSystem />
      </Canvas>
    </div>
  );
};

export default AboutHeroVisual;
