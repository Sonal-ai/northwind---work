// pages/index.tsx

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Feature from "../components/Feature";
import Values from "../components/Values";
import MissionVision from "../components/MissionVision";
import BrandStory from "../components/BrandStory";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PreLoader from "../components/PreLoader";

const Index = () => {
  return (
    <>
      <PreLoader />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Feature />
          <Values />
          <MissionVision />
          <BrandStory />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
