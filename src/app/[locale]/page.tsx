import { setRequestLocale } from 'next-intl/server';

import Header from '@/components/Layout/Header';
import Intro from "@/components/Intro";
import MainSection from "@/components/Layout/MainSection";
import AboutSection from '@/components/Section/About';
import ExperienceSection from '@/components/Section/Experience';

export default async function Home({ params} : {params: Promise<{ locale: string}>}) {
  const { locale } = await params;
  
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans lg:py-0">
        <div className="lg:flex lg:gap-4">
          <Intro />
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <MainSection title="About">
              <AboutSection />
            </MainSection>
            <MainSection title="Experience">
              <ExperienceSection />
            </MainSection>
          </main>
        </div>
      </div>
    </>
    
  );
}
