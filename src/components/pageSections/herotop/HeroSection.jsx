import Container from "../../container/Container";
import { Herotop } from "../../ui/Images/Image";
import Buttons from "../../ui/buttons/Buttons";

export default function HeroSection() {
  return (
    <Container>
      <div className="flex justify-between items-center my-[5rem]">
        <div>
          <h2 className="text-7xl font-extrabold">
            Digital Agency
            <br /> Business Make
            <br /> Big Deal.
          </h2>
          <p className="text-text_primary text-lg mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            <br />
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Buttons theme="filled" className="mt-9">
            Get Started
          </Buttons>
        </div>
        <div>
          <Herotop />
        </div>
      </div>
    </Container>
  );
}
