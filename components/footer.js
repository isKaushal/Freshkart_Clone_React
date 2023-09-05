import Image from "next/image";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// components
import Section from "../components/section";

// images
import Logo from "../public/images/logo.png";

const Footerinner = styled.div`
  width: 100%;
  display: grid;

  & > .footer_child > h2 {
    font-weight: 600;
    font-size: 25px;
  }
`;

export default function Footer() {
  return (
    <div className="bg-[#fb8827] w-full overflow-hidden ">
      <Section>
        <div className="mb-8">
          <Image
            className="hover:scale-90"
            style={{ transition: "0.3s ease-in-out" }}
            src={Logo}
            alt="logo"
            quality={100}
            width={200}
            height={100}
          />
        </div>
        <div style={{ height: "0.01rem" }} className="mb-16 bg-black"></div>
        <Footerinner className="grid-cols-12">
          <div className="footer_child  col-span-12 md:col-span-6 lg:col-span-4">
            <h2>Other Pages</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_child  col-span-12 md:col-span-6 lg:col-span-4">
            <h2>Available in</h2>
            <ul>
              <li>Brussels, Belgium</li>
              <li>Berlin, Germany</li>
              <li>Paris, France</li>
            </ul>
          </div>
          <div className="footer_child  col-span-12 lg:col-span-4 ">
            <h2>Available in</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </Footerinner>
      </Section>
    </div>
  );
}
