import Container from "../container/Container";
import { Herotop } from "../Images/Image";

export default function HeroSection() {
  return (
    <Container>
      <div className="flex items-center my-20">
        <div>
          <h2 className="text-7xl font-extrabold">
            Digital Agency
            <br /> Business Make
            <br /> Big Deal.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <Herotop />
        </div>
      </div>
    </Container>
  );
}
