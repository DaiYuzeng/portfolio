import { useTranslations } from "next-intl";

import SocialIcons from "@/components/SocialIcons";


export default function Intro() {
  const t = useTranslations();
  return (
    <header>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200">{t('generic.me')}</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200">{t('generic.role')}</h2>
        <p className="mt-4 leading-normal">{t('section.header.briefIntro')}</p>
        <SocialIcons />
      </div>
    </header>
  )
}
