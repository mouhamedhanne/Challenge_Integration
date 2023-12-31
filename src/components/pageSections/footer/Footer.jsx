import Container from "../../container/Container";

export default function Footer() {
  return (
    <div className="bg-[#3482FF] pt-[6rem] pb-[2rem]">
      <Container>
        <div className="text-white flex justify-around pb-8">
          <div className="-ml-[4.5rem]">
            <h1
              className="text-3xl font-black italic 
             cursor-pointer"
            >
              success
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              <br />
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div></div>
          </div>
          <div className="ml-[3rem]">
            <p className="font-bold">PAGES</p>
            <p className="mt-4 cursor-pointer">Home</p>
            <p className="mt-2 cursor-pointer">About</p>
            <p className="mt-2 cursor-pointer">Services</p>
            <p className="mt-2 cursor-pointer">Web Design</p>
            <p className="mt-2 cursor-pointer">Contact</p>
          </div>
          <div className="mr-[4rem]">
            <p className="font-bold">QUICK LINKS</p>
            <p className="mt-4 cursor-pointer">Privacy Policy</p>
            <p className="mt-2 cursor-pointer">Term Of Service</p>
            <p className="mt-2 cursor-pointer">Disclaimer</p>
            <p className="mt-2 cursor-pointer">Credits</p>
            <p className="mt-2 cursor-pointer">FAQ</p>
          </div>
        </div>
        <div className="border-b h-[0.5px] border-[#65A0FF] w-full"></div>
        <div className="flex justify-between text-white pt-8">
          <div>
            <p>Success elementor creative agency template</p>
          </div>
          <div>
            <p>Copyright © 2023 KitPapa, All rights reserved.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
