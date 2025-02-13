// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as='div'
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className='canvas-loader'></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: "#F1F1F1",
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >
//         {progress.toFixed(2)}%
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;



import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [isMobile, setIsMobile] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Throttle progress updates for better mobile performance
  useEffect(() => {
    const updateThreshold = isMobile ? 5 : 2; // Update less frequently on mobile
    if (Math.abs(displayProgress - progress) >= updateThreshold) {
      setDisplayProgress(progress);
    }
  }, [progress, isMobile, displayProgress]);

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: isMobile ? "80%" : "100%",
        transform: "translateZ(0)", // Enable hardware acceleration
      }}
      prepend // Important for mobile performance
      wrapperClass="canvas-loader-wrapper"
    >
      {/* Optimized spinner using CSS transforms */}
      <div 
        style={{
          width: isMobile ? 40 : 60,
          height: isMobile ? 40 : 60,
          border: `3px solid ${isMobile ? '#ffffff30' : '#ffffff50'}`,
          borderTop: '3px solid #915EFF',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          willChange: 'transform' // Optimize animation
        }}
      />
      
      {/* Performance-optimized text display */}
      <p
        style={{
          fontSize: isMobile ? 12 : 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: isMobile ? 20 : 40,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          letterSpacing: '0.5px'
        }}
      >
        {displayProgress.toFixed(0)}%
      </p>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .canvas-loader-wrapper {
            transform: scale(${isMobile ? 0.8 : 1}) !important;
            transition: transform 0.3s ease-out;
          }
        `}
      </style>
    </Html>
  );
};

export default CanvasLoader;