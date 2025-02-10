import React, { useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import * as THREE from 'three'; // Import Three.js
import { Canvas } from "@react-three/fiber"; // Import Canvas from react-three/fiber
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"; // Assuming this is your 3D Canvas component

const Hero = () => {
  useEffect(() => {
    // Initialize WebGLRenderer settings
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance", // Optimize for mobile
    });

    // Set the pixel ratio for mobile devices
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Check if WebGL is supported on the device
    if (!WebGLRenderingContext) {
      console.error("WebGL is not supported on this device.");
    } else {
      console.log("WebGL is supported.");
    }

    // Handle window resizing
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Update camera aspect ratio for responsiveness
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Optional: Start your animation loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <Suspense fallback={<div>Loading 3D Content...</div>}>
      <section className={`relative w-full h-screen mx-auto`}>
        <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Siddhanth Sakhare</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              MERN stack Developer <br className='sm:block hidden' />
              and Cyber Security enthusiast
            </p>
          </div>
        </div>

        {/* Add Canvas to render 3D models */}
        <Canvas
          dpr={[1, 1.5]} // Limits device pixel ratio for better mobile performance
          shadows
          camera={{ fov: 75, position: [0, 0, 5] }}
        >
          <ComputersCanvas />
        </Canvas>

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </section>
    </Suspense>
  );
};

export default Hero;
