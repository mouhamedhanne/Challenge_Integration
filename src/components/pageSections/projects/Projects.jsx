//import Container from "../../container/Container";
import { UxUiOne, UxUiTwo, UxUiThree } from "../../ui/Images/Image";
import Buttons from "../../ui/buttons/Buttons";
import Titles from "../../ui/titles/Titles";

export default function Projects() {
  return (
    <div
      className=" px-[4rem] flex items-center justify-center
     space-x-3 bg-[#E8EBEE] pt-[8rem] pb-[6.3rem]"
    >
      <div className="-mt-[7rem]">
        <h4
          className="bg-white pl-8 pr-[13.5rem] py-3 mb-3
         font-bold rounded-md hover:cursor-pointer"
        >
          UI / UX
        </h4>
        <h4
          className="bg-[#F3F7FA] text-gray-600 pl-8 pr-[12rem]
         py-3 mb-3 hover:text-[#888888] hover:bg-white font-semibold
         transition duration-300 ease-in-out transform rounded-md
         hover:cursor-pointer"
        >
          Web Design
        </h4>
        <h4
          className="bg-[#F3F7FA] text-gray-600 pl-8 pr-[13.5rem]
         py-3 hover:text-[#888888] hover:bg-white font-semibold
         transition duration-300 ease-in-out transform rounded-md
         hover:cursor-pointer"
        >
          Branding
        </h4>
      </div>
      <div>
        <Titles title="small">Our Project</Titles>
        <Titles title="large" className="mt-4 mb-[5rem]">
          Creative work.
        </Titles>

        <div className="flex space-x-4">
          <div
            className=" bg-white flex flex-col items-center
               rounded-b-[2rem]"
          >
            <UxUiOne />
            <Titles title="semi-medium" className="pt-8 pb-5">
              Branding One
            </Titles>
            <p className="text-text_primary text-center text-[16px]">
              Click edit to change this text.
              <br /> Lorem ipsum dolor sit amet,
              <br />
              cctetur adipiscing elit.
            </p>
            <Buttons theme="unFilled" className="mt-6 mb-9">
              Live Preview
            </Buttons>
          </div>
          <div
            className="bg-white flex flex-col items-center
            rounded-b-[2rem]"
          >
            <UxUiTwo />
            <Titles title="semi-medium" className="pt-8 pb-5">
              Branding One
            </Titles>
            <p className="text-text_primary text-center text-[16px]">
              Click edit to change this text.
              <br /> Lorem ipsum dolor sit amet,
              <br />
              cctetur adipiscing elit.
            </p>
            <Buttons theme="unFilled" className="mt-6 mb-9">
              Live Preview
            </Buttons>
          </div>
          <div
            className="bg-white flex flex-col items-center
            rounded-b-[2rem]"
          >
            <UxUiThree />
            <Titles title="semi-medium" className="pt-8 pb-5">
              Branding One
            </Titles>
            <p className="text-text_primary text-center text-[16px]">
              Click edit to change this text.
              <br /> Lorem ipsum dolor sit amet,
              <br />
              cctetur adipiscing elit.
            </p>
            <Buttons theme="unFilled" className="mt-6 mb-9">
              Live Preview
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}
