// import { useEffect } from "react";
import styled from "styled-components";
// import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { useState } from "react";
import { useReducer } from "react";

// for demo only
// crousel client Images
import profileImg1 from "../public/images/index-page/delicious/1.jpg";
import profileImg2 from "../public/images/index-page/delicious/2.jpg";
import profileImg3 from "../public/images/index-page/delicious/3.jpg";
import profileImg4 from "../public/images/index-page/delicious/4.jpg";
import profileImg5 from "../public/images/index-page/delicious/5.jpg";
import profileImg6 from "../public/images/index-page/delicious/6.jpg";
import profileImg7 from "../public/images/index-page/delicious/7.jpg";
import profileImg8 from "../public/images/index-page/delicious/8.jpg";
// import Layout from "components/Layout";

const CarouselContainer = styled.div`
  height: 40rem;
  padding: 2rem;
  position: relative;
  background-image: url(images/playground/background.png);
  /* background: linear-gradient( white , #ff6e01 100% ); */
`;

const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  p {
    margin: 1rem;
    font-size: 4rem;
  }
  h3 {
    text-align: center;
    font-size: 2rem;
  }
  h6 {
    text-align: center;
    font-size: 15px;
  }
  button {
    background-color: transparent;
  }
  button:hover p {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const CircularImage = styled.div`
  z-index: 1;
  border: 3px solid #ff6e01;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  transition: 1s cubic-bezier(0.69, 0.1, 0.36, 0.88);
  position: absolute;
`;

const SliderTransitionFirst = styled.div`
  /* box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5); */
  background-color: white;
  border: 1px solid black;
  width: 32rem;
  padding: 1rem;
  transform: scale(0.9);
  border-radius: 10px;
  animation: ${(props) =>
    props.direction === "left"
      ? "fadeInRightFirst 0.3s cubic-bezier(0.58, 0.08, 0.36, 0.88)"
      : "fadeInLeftFirst 0.3s cubic-bezier(0.58, 0.08, 0.36, 0.88)"};
  @keyframes fadeInLeftFirst {
    0% {
      transform: translateX(-30%) scale(0.8);
    }
    100% {
      transform: translateX(0%) scale(0.9);
    }
  }
  @keyframes fadeInRightFirst {
    0% {
      transform: translateX(30%) scale(1);
    }
    100% {
      transform: translateX(0%) scale(0.9);
    }
  }
  /* @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(30%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  } */
`;
const SliderTransitionSecond = styled.div`
  /* box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5); */
  background-color: white;
  border: 1px solid black;
  width: 32rem;
  padding: 1rem;
  border-radius: 10px;
  animation: ${(props) =>
    props.direction === "left"
      ? "fadeInRight 0.3s cubic-bezier(0.58, 0.08, 0.36, 0.88)"
      : "fadeInLeft 0.3s cubic-bezier(0.58, 0.08, 0.36, 0.88)"};
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(35%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
const SliderTransitionThird = styled.div`
  /* box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5); */
  background-color: white;
  border: 1px solid black;
  width: 32rem;
  padding: 1rem;
  transform: scale(0.9);
  border-radius: 10px;
  animation: ${(props) =>
    props.direction === "left"
      ? "fadeInRightThird 0.3s cubic-bezier(0.58, 0.08, 0.36, 0.88)"
      : "fadeInLeftThird 0.3s cubic-bezier(0.58, 0.08, 0.36, 0.88)"};

  @keyframes fadeInLeftThird {
    0% {
      transform: translateX(-30%) scale(1);
    }
    100% {
      transform: translateX(0%) scale(0.9);
    }
  }
  @keyframes fadeInRightThird {
    0% {
      transform: translateX(30%) scale(0.8);
    }
    100% {
      transform: translateX(0%) scale(0.9);
    }
  }

  /* @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(30%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  } */
`;

function EmptyStars({ count }) {
  let emptyStars = 0;

  if (count === 0) {
    emptyStars = 5;
  } else if (count === 1) {
    emptyStars = 4;
  } else if (count === 2) {
    emptyStars = 3;
  } else if (count === 3) {
    emptyStars = 2;
  } else if (count === 4) {
    emptyStars = 1;
  } else if (count === 5) {
    emptyStars = 0;
  }

  const secondDataList = Array.from({ length: emptyStars }, () => {
    if (count <= 5) {
      return (
        <svg height="30" width="30">
          <path
            d="M 18 10 C 15 1 15 1 12 10 C 1 9 1 9 10 15 C 5 26 5 26 15 18 C 25 26 25 26 20 15 C 30 9 30 9 18 10"
            style={{ fill: "none", strokeWidth: "2", stroke: "#ffc83d" }}
          />
        </svg>
      );
    }
  });

  return secondDataList;
}

function Stars({ count }) {
  const dataList = Array.from({ length: count }, () => {
    if (count <= 5) {
      return (
        <svg height="30" width="30">
          <path
            d="M 18 10 C 15 1 15 1 12 10 C 1 9 1 9 10 15 C 5 26 5 26 15 18 C 25 26 25 26 20 15 C 30 9 30 9 18 10"
            style={{ fill: "#ffc83d", strokeWidth: "2", stroke: "#ffc83d" }}
          />
        </svg>
      );
    }
  });

  return dataList;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "prev": {
      const { index, list } = state;

      let latestIndex = 0;

      if (index === 0) {
        latestIndex = list.length - 1;
      } else {
        latestIndex = index - 1;
      }

      return {
        list: state.list,
        index: latestIndex,
        direction: "right",
        rating: list[latestIndex].rating,
        centerElement: {
          ...list[latestIndex],
          style: {
            top: "25%",
            left: "50%",
          },
        },
      };
    }

    case "next": {
      const { index, list } = state;

      let latestIndex = 0;

      if (index === list.length - 1) {
        latestIndex = 0;
      } else {
        latestIndex = index + 1;
      }

      return {
        list: state.list,
        index: latestIndex,
        direction: "left",
        rating: list[latestIndex].rating,
        centerElement: {
          ...list[latestIndex],
          style: {
            top: "25%",
            left: "50%",
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

function ImageCarousel({ list }) {
  const [state, dispatch] = useReducer(reducer, {
    list: list,
    direction: "left",
    index: 0,
    rating: 1,
    centerElement: {
      ...list[0],
      style: {
        top: "25%",
        left: "50%",
      },
    },
  });

  // useEffect(() => {
  //     const intervel = setInterval(() => {
  //         next();
  //     }, 3500);

  //     return () => clearInterval(intervel);
  // });

  function prev() {
    dispatch({ type: "prev" });
  }

  function next() {
    dispatch({ type: "next" });
  }

  return (
    <CarouselContainer>
      {/* {state.list.map((value, index) => {
        if (state.index === index) {
          return (
            <CircularImage key={index} style={state.centerElement.style}>
              <Image src={state.centerElement.src} alt="..." />
            </CircularImage>
          );
        } else {
          return (
            <CircularImage key={index} style={value.style}>
              <Image src={value.src} alt="..." />
            </CircularImage>
          );
        }
      })} */}

      <Slider>
        <div
          style={{
            position: "relative",
            display: "flex",
            // overflow: "hidden",
            // width: "50rem",
            // justifyContent: "center",
          }}
          className="translate-x-32"
        >
          <SliderTransitionFirst
            direction={state.direction}
            key={state.index}
            className="shadow-2xl"
          >
            <div style={{ padding: "1rem" }}>
              <div>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus ex nostrum impedit minima aspernatur nisi laudantium
                  consequatur perspiciatis voluptate totam placeat, in non, quod
                  quos et voluptas animi. Eius, harum?
                </h6>
              </div>
              <div>
                <h3>{state.centerElement.para}</h3>
              </div>
              <div>
                <h6>
                  <b>{state.centerElement.subPara}</b>
                </h6>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stars count={state.rating} />
                <EmptyStars count={state.rating} />
              </div>
            </div>
          </SliderTransitionFirst>
        </div>

        <button style={{ fontFamily: "none", zIndex: "10" }} onClick={prev}>
          <p>&#8249;</p>
        </button>

        <div
          style={{
            position: "relative",
            display: "flex",
            // overflow: "hidden",
            // width: "50rem",
            // justifyContent: "center",
          }}
        >
          <SliderTransitionSecond
            direction={state.direction}
            key={state.index}
            // style={{ boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.5)" }}
            className="z-[2] shadow-2xl"
          >
            <div style={{ padding: "1rem" }}>
              <div>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus ex nostrum impedit minima aspernatur nisi laudantium
                  consequatur perspiciatis voluptate totam placeat, in non, quod
                  quos et voluptas animi. Eius, harum?
                </h6>
              </div>
              <div>
                <h3>{state.centerElement.para}</h3>
              </div>
              <div>
                <h6>
                  <b>{state.centerElement.subPara}</b>
                </h6>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stars count={state.rating} />
                <EmptyStars count={state.rating} />
              </div>
            </div>
          </SliderTransitionSecond>
        </div>

        <button style={{ fontFamily: "none", zIndex: "10" }} onClick={next}>
          <p>&#8250;</p>
        </button>

        <div
          style={{
            position: "relative",
            display: "flex",
            // overflow: "hidden",
            // width: "50rem",
            // justifyContent: "center",
          }}
          className="-translate-x-32"
        >
          <SliderTransitionThird
            direction={state.direction}
            key={state.index}
            className="shadow-2xl"
          >
            <div style={{ padding: "1rem" }}>
              <div>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus ex nostrum impedit minima aspernatur nisi laudantium
                  consequatur perspiciatis voluptate totam placeat, in non, quod
                  quos et voluptas animi. Eius, harum?
                </h6>
              </div>
              <div>
                <h3>{state.centerElement.para}</h3>
              </div>
              <div>
                <h6>
                  <b>{state.centerElement.subPara}</b>
                </h6>
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stars count={state.rating} />
                <EmptyStars count={state.rating} />
              </div>
            </div>
          </SliderTransitionThird>
        </div>
      </Slider>
    </CarouselContainer>
  );
}

export default function Playground() {
  const dataList = [
    {
      src: profileImg1,
      rating: 1,
      alt: "this is 1",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "20%",
        top: "10%",
        scale: "0.4",
      },
    },
    {
      src: profileImg2,
      rating: 2,
      alt: "this is 2",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "5%",
        top: "35%",
        scale: "0.6",
      },
    },
    {
      src: profileImg3,
      rating: 3,
      alt: "this is 3",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "20%",
        top: "60%",
        scale: "0.8",
      },
    },
    {
      src: profileImg4,
      rating: 4,
      alt: "this is 4",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "5%",
        top: "85%",
        scale: "1",
      },
    },
    {
      src: profileImg5,
      rating: 5,
      alt: "this is 5",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "95%",
        top: "10%",
        scale: "1",
      },
    },
    {
      src: profileImg6,
      rating: 1,
      alt: "this is 6",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "78%",
        top: "35%",
        scale: "0.8",
      },
    },
    {
      src: profileImg7,
      rating: 2,
      alt: "this is 7",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Bhanu, New York",
      style: {
        left: "95%",
        top: "60%",
        scale: "0.6",
      },
    },
    {
      src: profileImg8,
      rating: 3,
      alt: "this is 8",
      para: " Lorem Lorem ipsum dolor sit amet",
      subPara: "Kaushal, New York",
      style: {
        left: "78%",
        top: "85%",
        scale: "0.4",
      },
    },
  ];

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>CLIENT THAT TRUST US </h3>
      <ImageCarousel list={dataList} />
    </div>
  );
}
