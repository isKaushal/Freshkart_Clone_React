import Image from "next/image";
import styled from "styled-components";

// components

const AnimationContainer = styled.div`
  & > .slider {
    animation: ${(props) =>
      props.direction === "forwards"
        ? "forward linear infinite"
        : "revarse linear infinite"};
    animation-duration: ${(props) => `${props.speed}s`};
    @keyframes forward {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    @keyframes revarse {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  }
`;

export default function Delicious({
  direction = "forwards",
  speed = "10",
  list,
}) {
  return (
    <>
      <AnimationContainer direction={direction} speed={speed} className="flex">
        {Array.from({ length: 3 }).map((index) => {
          return (
            <div key={index} className="flex slider">
              {list.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-lg m-3 overflow-hidden w-[100px] h-[100px]"
                  >
                    <Image
                      src={data.src}
                      quality={100}
                      width={100}
                      height={100}
                      style={{ aspectRatio: "1/1" }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </AnimationContainer>
    </>
  );
}
