"use client"

import { useState, useEffect } from "react";

export default function Spotlight() {
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX;
      const y = e.pageY;

      setStyle({
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="spotlight fixed pointer-events-none inset-0 z-30 transition duration-300 lg:absolute" style={style}></div>
  );
}