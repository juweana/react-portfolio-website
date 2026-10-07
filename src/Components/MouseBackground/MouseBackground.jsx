import React, { useEffect, useRef } from "react";
import "./MouseBackground.css";

const MouseBackground = () => {
  const blobRef = useRef(null);

  // Track actual mouse position and current smooth position using refs to avoid re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth animation loop (Lerp - Linear Interpolation)
    let animationFrameId;
    const render = () => {
      // Adjust the 0.1 value to make it faster (higher) or smoother/sluggish (lower)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.1;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="global-glow-container">
      <div className="global-grid-pattern" />
      <div ref={blobRef} className="global-glow-blob" />
    </div>
  );
};

export default MouseBackground;
