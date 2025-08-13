import Header from "@/components/Layout/Header";
import MainSection from "@/components/Layout/MainSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans">
      <div>
        <Header />
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
  );
}
