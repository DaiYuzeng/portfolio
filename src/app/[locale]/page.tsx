import { setRequestLocale } from 'next-intl/server';

import Spotlight from '@/components/Spotlight';
import Header from '@/components/Layout/Header';
import Intro from "@/components/Intro";
import MainSection from "@/components/Layout/MainSection";
import AboutSection from '@/components/Section/About';
import ExperienceSection from '@/components/Section/Experience';
import ProjectsSection from '@/components/Section/Projects';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params} : {params: Promise<{ locale: string}>}) {
  const { locale } = await params;
  
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'generic' });

  return (
    <div className='group/spotlight relative'>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-4 left-4 z-10 text-slate-200 focus:text-teal-300 font-medium text-xs"
      >
        {t('skipToContent')}
      </a>
      <Spotlight />
      <Header />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:gap-4">
          <Intro />
          <main id="main-content" className="pt-24 lg:w-[52%] lg:py-24">
            <MainSection id="about">
              <AboutSection />
            </MainSection>
            <MainSection id="experience">
              <ExperienceSection />
            </MainSection>
            <MainSection id="projects">
              <ProjectsSection />
            </MainSection>
          </main>
        </div>
      </div>
    </div>  
  );
}
