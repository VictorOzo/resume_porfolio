import AboutSection from "@/components/AboutSection";
import ArticlesInsights from "@/components/ArticlesInsights";
import ConnectSection from "@/components/ConnectSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <TechStack />
      <ArticlesInsights />
      <ConnectSection />
    </>
  );
}
