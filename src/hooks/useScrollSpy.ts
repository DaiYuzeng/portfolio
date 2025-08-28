import { useState, useEffect } from "react"

export default function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      
      if (visible[0]) setActiveId(visible[0].target.id)
      else {
        const top = elements.find((el: HTMLElement) => el.getBoundingClientRect().top >= 0)

        if (top) setActiveId(top.id)
      }
    }, {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1]
    })

    elements.forEach((el: HTMLElement) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids])

  return activeId;
}