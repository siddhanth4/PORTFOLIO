import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isSmallMobile }) => {
  const computer = useGLTF("./desktop_pc/scene-compressed.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? (isSmallMobile ? 0.25 : 0.45) : 0.75} // Adjusted scale for different ranges
        position={isMobile ? (isSmallMobile ? [0, -1.5, -1] : [0, -2.5, -1]) : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 530);
      setIsSmallMobile(width > 530 && width <= 840); // Range from 530px to 840px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If it's a mobile view with width less than 530px, return null (hide the model)
  if (isMobile) return null;

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isSmallMobile ? [8, 3, 4] : [20, 3, 5], // Adjusted camera position for small mobile range
        fov: isSmallMobile ? 28 : 25, // Slightly tighter field of view for small mobile
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isSmallMobile={isSmallMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
