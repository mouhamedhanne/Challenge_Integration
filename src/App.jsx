import Navigation from "./components/header/Navigation";
import HeroSection from "./components/herotop/HeroSection";

export default function App() {
  return (
    <main>
      <div className="bg-bg_primary">
        <Navigation />
        <HeroSection />
      </div>
    </main>
  );
}
