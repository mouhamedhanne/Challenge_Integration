import Container from "../../container/Container";

export default function Footer() {
  return (
    <div className="bg-[#3482FF] mb-20 pt-[6rem]">
      <Container>
        <div className="text-white flex justify-between">
          <div>
            <h1
              className="text-3xl font-black italic 
             cursor-pointer"
            >
              success
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              <br />
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div></div>
          </div>
          <div>
            <p>PAGES</p>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Web Design</p>
            <p>Contact</p>
          </div>
          <div>
            <p>QUICK LINKS</p>
            <p>Privacy Policy</p>
            <p>Term Of Service</p>
            <p>Disclaimer</p>
            <p>Credits</p>
            <p>FAQ</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
