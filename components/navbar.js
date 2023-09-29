import Image from "next/image";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// images
import Logo from "../public/images/logo.png";
import Button from "./button";

const NavbarStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > .navlinks {
    display: flex;
  }

  ul {
    display: none;
  }

  @media screen and (min-width: 768px) {
    ul {
      display: flex;
      align-items: center;
      & > li {
        font-weight: 500;
        margin: 0.5rem 1rem;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <motion.div
      className="w-full shadow-lg flex justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.2, stiffness: 25 }}
    >
      <div className="w-full lg:w-[1024px] xl:w-[1280px] flex justify-center p-4">
        <NavbarStyles>
          <div className="flex items-center">
            <Image
              className="hover:scale-90"
              style={{ transition: "0.3s ease-in-out" }}
              src={Logo}
              quality={100}
              width={200}
              height={100}
              alt=""
            />
          </div>

          <div className="navlinks hidden lg:flex">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Busines</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <div className="lg:ml-8 text-xs sm:text-base  ">
              <Button />
            </div>
          </div>
        </NavbarStyles>
      </div>
    </motion.div>
  );
}
