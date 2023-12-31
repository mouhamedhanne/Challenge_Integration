import Online from "./components/pageSections/OnlineAgence/Online";
import Cta from "./components/pageSections/cta/Cta";
import Footer from "./components/pageSections/footer/Footer";
import Navigation from "./components/pageSections/header/Navigation";
import HeroSection from "./components/pageSections/herotop/HeroSection";
import Partners from "./components/pageSections/partners/Partners";
import Projects from "./components/pageSections/projects/Projects";
import Services from "./components/pageSections/services/Services";
import Testimonial from "./components/pageSections/testimonials/Testimonial";

export default function App() {
  return (
    <main>
      <div className="bg-bg_primary">
        <Navigation />
        <HeroSection />
        <Cta />
        <Services />
        <Partners />
        <Online />
        <Projects />
        <Testimonial />
        <Footer />
      </div>
    </main>
  );
}
