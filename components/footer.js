import Image from "next/image";
import Section from "../components/section";
import { styled } from "styled-components";

const Footerinner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export default function Footer() {
  return (
    <div className="bg-[#fb8827] w-full overflow-hidden ">
      <Section>
        <Footerinner>
          <div className="footer_child  col-span-12 md:col-span-6 lg:col-span-4 ">
            <div>Other Pages</div>
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
            <div>Safe Payments Via:</div>
            <ul>
              <Image />
            </ul>
          </div>
          <div className="footer_child  col-span-12 lg:col-span-4 ">
            <div>Available in</div>
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
