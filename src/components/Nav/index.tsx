"use client"

import { useCallback } from "react";
import useScrollSpy from "@/hooks/useScrollSpy"

import NavItem from "@/components/Nav/NavItem"

export default function Nav({ navKeys }: { navKeys: string[] }) {
  const activeId = useScrollSpy(navKeys);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);

    

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    }
  }, [])

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {
          navKeys.map((navKey: string) => (
            <NavItem key={navKey} navKey={navKey} active={activeId === navKey} onClick={handleClick} />
          ))
        }
      </ul>
    </nav>
  )
}