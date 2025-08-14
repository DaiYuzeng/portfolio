import { setRequestLocale } from 'next-intl/server';

import Header from '@/components/Layout/Header';
import Intro from "@/components/Intro";
import MainSection from "@/components/Layout/MainSection";

export default async function Home({ params} : {params: Promise<{ locale: string}>}) {
  const { locale } = await params;
  
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans">
        <div>
          <Intro />
          <main className="pt-24">
            <MainSection title="About">
              <p className="mb-4">I’m a developer passionate about building accessible, performance-optimized, and component-driven web applications using React, Vue.js, and modern front-end technologies. </p>
              <p className="mb-4">Strong focus on design systems, interactive UI components, and scalable architecture.</p>
              <p className="mb-4">Contributor to open-source projects including Rancher and Harvester.</p>
            </MainSection>
            <MainSection title="Experience">
              <p className="mb-4">I’m a developer passionate about building accessible, performance-optimized, and component-driven web applications using React, Vue.js, and modern front-end technologies. </p>
              <p className="mb-4">Strong focus on design systems, interactive UI components, and scalable architecture.</p>
              <p className="mb-4">Contributor to open-source projects including Rancher and Harvester.</p>
            </MainSection>
          </main>
        </div>
      </div>
    </>
    
  );
}
