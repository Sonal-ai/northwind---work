import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Feature from "../components/Feature";
import Values from "../components/Values";
import MissionVision from "../components/MissionVision";
import BrandStory from "../components/BrandStory";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const Index = () => {
  return (
    <>
      <Preloader />
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
