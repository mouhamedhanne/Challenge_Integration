import Container from "../../container/Container";
import Titles from "../../ui/titles/Titles";
import { JamesCooper, DanielleDino, JohnSmith } from "../../ui/Images/Image";

const testi = [
  {
    fullName: "James Cooper",
    post: "Product Designer",
    comment:
      "“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”",
  },

  {
    fullName: "Danielle Dino",
    post: "Product Designer",
    comment:
      "“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”",
  },

  {
    fullName: "John Smith",
    post: "Product Designer",
    comment:
      "“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”",
  },

  {
    fullName: "James Cooper",
    post: "Product Designer",
    comment:
      "“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-[#1E1C1E] mb-20 py-[6.2rem]">
      <Container>
        <div className="mb-[6.2rem]">
          <Titles title="large" className="text-white">
            Some Words From
            <br />
            Our Customers
          </Titles>
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <div
              className="relative bg-white py-[3rem] 
              px-[4rem] rounded-[1.1rem]"
            >
              <div
                className="absolute -top-12 left-10 bg-white
              p-3 rounded-full"
              >
                <JamesCooper />
              </div>
              <h3 className="text-[22px] font-bold ">James Cooper</h3>
              <p className="text-text_primary mt-2">Product Designer</p>
              <p className="mt-2">
                “We seek to get involved early in the design phase so that
                <br /> we can manage the project more efficiently, provide
                <br /> effective building solutions”
              </p>
            </div>
            <div
              className="relative bg-white py-[3rem] 
              px-[4rem] rounded-[1.1rem]"
            >
              <div
                className="absolute -top-12 left-10 bg-white
              p-3 rounded-full"
              >
                <DanielleDino />
              </div>
              <h3 className="text-[22px] font-bold">Danielle Dino</h3>
              <p className="text-text_primary mt-2">Product Designer</p>
              <p className="mt-2">
                “We seek to get involved early in the design phase so that
                <br /> we can manage the project more efficiently, provide
                <br /> effective building solutions”
              </p>
            </div>
          </div>
        </div>
        {/** */}
        <div className="mt-[5.5rem]">
          <div className="flex justify-between">
            <div
              className="relative bg-white py-[3rem] 
              px-[4rem] rounded-[1.1rem]"
            >
              <div
                className="absolute -top-12 left-10 bg-white
              p-3 rounded-full"
              >
                <JohnSmith />
              </div>
              <h3 className="text-[22px] font-bold ">John Smith</h3>
              <p className="text-text_primary mt-2">Product Designer</p>
              <p className="mt-2">
                “We seek to get involved early in the design phase so that
                <br /> we can manage the project more efficiently, provide
                <br /> effective building solutions”
              </p>
            </div>
            <div
              className="relative bg-white py-[3rem] 
              px-[4rem] rounded-[1.1rem]"
            >
              <div
                className="absolute -top-12 left-10 bg-white
              p-3 rounded-full"
              >
                <JamesCooper />
              </div>
              <h3 className="text-[22px] font-bold">JamesCooper</h3>
              <p className="text-text_primary mt-2">Product Designer</p>
              <p className="mt-2">
                “We seek to get involved early in the design phase so that
                <br /> we can manage the project more efficiently, provide
                <br /> effective building solutions”
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
