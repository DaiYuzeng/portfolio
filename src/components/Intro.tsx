import { useTranslations } from "next-intl";


export default function Intro() {
  const t = useTranslations("generic");
  return (
    <header>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200">{t('me')}</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200">{t('role')}</h2>
        <p className="mt-4 leading-normal">I build accessible, pixel-perfect digital experiences for the web.</p>
      </div>
    </header>
  )
}
