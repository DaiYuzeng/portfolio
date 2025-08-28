import { memo } from "react";
import { useTranslations } from "next-intl"
import { NavItemProps } from "@/types/components";

import Link from "next/link"

const NavItem = memo(function NavItem({ navKey, active, onClick }: NavItemProps) {
  const t = useTranslations();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onClick(id)
  }

  return (
    <li>
      <Link href={`#${navKey}`} className="group flex items-center py-3" onClick={(e) => handleClick(e, navKey)}>
        <span className={`mr-4 h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 transition-all motion-reduce:transition-none ${active ? 'w-16 bg-slate-200' : null}`}></span>
        <span className={`text-xs uppercase font-bold tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${active ? 'text-slate-200' : 'text-slate-500'}`}>{t(`section.${navKey}.title`)}</span>
      </Link>
    </li>
  )
})

export default NavItem;
