import { useTranslations } from "next-intl";

import SocialIcons from "@/components/SocialIcons";
import Nav from "@/components/Nav/index";


export default function Intro() {
  const t = useTranslations();
  return (
    <header className="lg:w-[48%] lg:sticky lg:top-0 lg:max-h-screen lg:py-24 lg:flex lg:flex-col lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{t('generic.me')}</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{t('generic.role')}</h2>
        <p className="mt-4 max-w-xs leading-normal">{t('section.header.briefIntro')}</p>
        <Nav navKeys={['about', 'experience', 'projects']} />
      </div>
      <SocialIcons />
    </header>
  )
}
