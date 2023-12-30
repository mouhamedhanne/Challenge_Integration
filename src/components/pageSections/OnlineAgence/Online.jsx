import Container from "../../container/Container";
import { OnlineIllustration } from "../../ui/Images/Image";
import Buttons from "../../ui/buttons/Buttons";
import Titles from "../../ui/titles/Titles";

export default function Online() {
  return (
    <Container>
      <div className="flex items-center justify-around mt-[8rem] mb-10">
        <div>
          <OnlineIllustration />
        </div>
        <div>
          <Titles title="small">Our Agency</Titles>
          <Titles title="large" className="my-6">
            Best Online Agency
            <br /> Since 2023
          </Titles>
          <p className="text-text_primary mb-3 ">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            <br />
            Industry. Lorem Ipsum Has Been The Industry's Standard.
          </p>
          <p className="text-text_primary">
            Lorem Ipsum Is Simply Dummy Text Of The Printing Industry. Lorem
            <br />
            Ipsum Has Been The Industry's Standard.
          </p>
          <Buttons theme="filled" className="mt-10">
            Learn More
          </Buttons>
        </div>
      </div>
    </Container>
  );
}
