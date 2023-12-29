import React from "react";
import Container from "../../container/Container";

export default function Navigation() {
  return (
    <Container>
      <nav>
        <div className="flex justify-between items-center mt-6">
          <div>
            <h1
              className="text-3xl font-black italic text-[#3482FF]
             cursor-pointer"
            >
              success
            </h1>
          </div>
          <div>
            <ul className="flex text-[#0B0B0B] ">
              <li className="mr-12 cursor-pointer hover:text-[#3482FF]">
                Home
              </li>
              <li className="mr-12 cursor-pointer hover:text-[#3482FF]">
                About
              </li>
              <li className="mr-12 cursor-pointer hover:text-[#3482FF]">
                Services
              </li>
              <li className="cursor-pointer hover:text-[#3482FF]">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}
