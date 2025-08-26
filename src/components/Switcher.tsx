"use client";

import { SwitcherProps } from "@/types/components";
import { useState, useEffect, useId } from "react";

export default function Switcher({ defaultChecked, role = 'switch', ariaLabel = 'Switcher', ariaDescription = 'This is a switcher used to switch between modes or something else.' , onChange, children }: SwitcherProps) {
  const [isOn, setIsOn] = useState(!!defaultChecked);
  const descId = useId();

  useEffect(() => {
    setIsOn(!!defaultChecked);
  }, [defaultChecked]);
  
  const toggle = () => {
    const next = !isOn;
    
    setIsOn(next);
    onChange(next);
  };

  

  return (
    <button
      type="button"
      role={role}
      aria-checked={isOn}
      aria-label={ariaLabel}
      aria-describedby={descId}
      className={`group relative overflow-hidden rounded-full p-2 cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
        bg-gradient-to-b transition-all motion-reduce:transition-none duration-300 ease-out
        ${isOn ? "from-teal-800 to-teal-950 translate-y-1 scale-95" : "from-slate-800 to-slate-950 scale-100"}
      `}
      onClick={toggle}
    >
      <span
        className={`
          absolute inset-x-0 bottom-0 h-0 transition-all motion-reduce:transition-none duration-500 bg-gradient-to-b from-teal-800 to-teal-950
          ${isOn && 'h-full'}
          group-hover:h-full
        `}
        aria-hidden="true"
      ></span>
      <span className="relative z-10" aria-hidden="true">
        { children }
      </span>
      <span id={descId} className="sr-only">{ariaDescription}</span>
    </button>
  )
}