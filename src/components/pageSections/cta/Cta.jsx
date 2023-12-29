import Container from "../../container/Container";
import Titles from "../../ui/titles/Titles";

export default function Cta() {
  return (
    <Container>
      <div className="mb-16 mt-[6rem]">
        <Titles title="small" className="text-center mb-4">
          What We Do
        </Titles>
        <Titles title="large" className="text-center">
          We Make <span className="text-[#296BD3]">Designs</span>
          <br /> that Lead and Inspire.
        </Titles>
        <p className="text-text_primary text-center mt-6">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry.
          <br /> Lorem Ipsum Has Been The Industry's Standard.
        </p>
      </div>
    </Container>
  );
}
