import { Hero } from "@/components/Hero";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedMenu />
      <About />
      <Contact />
    </main>
  );
};

export default Index;