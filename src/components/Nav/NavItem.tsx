import { useTranslations } from "next-intl"

export default function NavItem({ navKey }: { navKey: string}) {
  const t = useTranslations();

  return (
    <li>
      <a href={`#${navKey}`} className="group flex items-center py-3">
        <span className="mr-4 h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 transition-all motion-reduce:transition-none"></span>
        <span className="text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{t(`section.${navKey}.title`)}</span>
      </a>
    </li>
  )
}