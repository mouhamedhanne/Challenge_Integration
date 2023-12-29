import Container from "../../container/Container";
import { Ux, WebDesign, Branding } from "../../ui/Images/Image";
import Titles from "../../ui/titles/Titles";

export default function Services() {
  const Paragraph = ({ paragraph, className }) => {
    switch (paragraph) {
      case "paragraph":
        return (
          <p className={`text-text_primary text-lg ${className}`}>
            Lorem Ipsum is simply
            <br /> dummy text of
            <br /> the printing and typesetting
            <br />
            industry.
          </p>
        );

      default:
        return <p>Paragrahne non defini</p>;
    }
  };
  return (
    <Container>
      <div
        className="mb-20 flex items-center justify-around
       bg-[#F3F7FA] px-20 py-[7rem] rounded-[3rem]"
      >
        <div
          className="hover:bg-white p-12 rounded-[1rem]
         transition duration-300 ease-in-out transform"
        >
          <Ux />
          <Titles title="medium" className="mt-4">
            UI/UX Design
          </Titles>
          <Paragraph paragraph="paragraph" className="mt-4" />
        </div>
        <div
          className="hover:bg-white p-12 rounded-[1rem] 
        transition duration-300 ease-in-out transform"
        >
          <WebDesign />
          <Titles title="medium" className="mt-4">
            Web Design
          </Titles>
          <Paragraph paragraph="paragraph" className="mt-4" />
        </div>
        <div
          className="hover:bg-white p-12 rounded-[1rem] 
        transition duration-300 ease-in-out transform"
        >
          <Branding />
          <Titles title="medium" className="mt-4">
            Branding
          </Titles>
          <Paragraph paragraph="paragraph" className="mt-4" />
        </div>
      </div>
    </Container>
  );
}
