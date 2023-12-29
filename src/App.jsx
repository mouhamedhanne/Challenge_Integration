import Cta from "./components/pageSections/cta/Cta";
import Navigation from "./components/pageSections/header/Navigation";
import HeroSection from "./components/pageSections/herotop/HeroSection";
import Partners from "./components/pageSections/partners/Partners";
import Services from "./components/pageSections/services/Services";

export default function App() {
  return (
    <main>
      <div className="bg-bg_primary">
        <Navigation />
        <HeroSection />
        <Cta />
        <Services />
        <Partners />
      </div>
    </main>
  );
}
