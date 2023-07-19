import { useRef, useEffect } from "react";
import Image from "next/image";
import { useMedia } from "react-use";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

// components
import Section from "../components/Section";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ProblemSection from "@/components/Problemsection";
import AudinceSection from "@/components/Audince";
import OurStyle from "@/components/OurStyle";
import SliderMotion from "../components/MotionSlider";
import GallerySlider from "../components/SwiperSlider";

// images
import QualityImage_1 from "../public/images/index-page/quality-1.png";
import QualityImage_2 from "../public/images/index-page/quality-2.png";
import QualityImage_3 from "../public/images/index-page/quality-3.png";
import QualityImage_4 from "../public/images/index-page/quality-4.png";

import How_1 from "../public/images/index-page/how-1.svg";
import How_2 from "../public/images/index-page/how-2.svg";
import How_3 from "../public/images/index-page/how-3.svg";

import Access_1 from "../public/images/index-page/access-1.png";
import Access_2 from "../public/images/index-page/access-2.png";

const HowItWorks = () => {
  return (
    <Section>
      <div className="flex justify-center items-center">
        <div className="text-center lg:w-[60%]  ">
          <h1 className=" thm-green-color  text-center text-lg  ">
            HOW IT WORKS
          </h1>
          <h1 className="font-bold text-5xl my-4   ">
            We deliver daily meals, directly to your home or office
          </h1>
          <p className="text-lg phagraph-gray pharagraph-gray  ">
            Set your food preferences and fitness goals and our recommendation
            engine will generate a meal plan that is right for you. We cook the
            meals and deliver it to you everyday at your preferred delivery slot
            and location.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 text-center  ">
        <div className="lg:col-span-4 col-span-12  w-full h-full p-5   ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full flex justify-center   "
          >
            <Image
              className="w-[15rem] my-10  h-auto "
              src={How_1}
              quality={100}
              alt="img"
            />
          </motion.div>
          <div>
            <h1 className="text-2xl font-semibold  ">
              1. Set your preferences and goals
            </h1>
            <p className="text-lg pharagraph-gray  ">
              We have a wide variety of meals to fit your needs. Set your food
              preferences and fitness goals and our recommendation engine will
              suggest a meal plan for you.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-12  w-full h-full p-5   ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-full flex justify-center   "
          >
            <Image
              className="w-[15rem] my-10  h-auto "
              src={How_2}
              quality={100}
              alt="img"
            />
          </motion.div>
          <div>
            <h1 className="text-2xl font-semibold  ">
              2. Subscribe to Weekly Meal Plans
            </h1>
            <p className="text-lg pharagraph-gray  ">
              We cook the meals with locally sourced ingredients, free of
              additives and preservatives - just like home cooked meals.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-12  w-full h-full p-5   ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="w-full flex justify-center   "
          >
            <Image
              className="w-[15rem] my-10  h-auto "
              src={How_3}
              quality={100}
              alt="img"
            />
          </motion.div>
          <div>
            <h1 className="text-2xl font-semibold  ">
              3. Get meals right where you are
            </h1>
            <p className="text-lg pharagraph-gray  ">
              We deliver meals warm at your location in a timeslot that you
              choose. You can get lunch and dinner, delivered to your home or
              office. You can change location and time up to 24 hours before
              delivery.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

function OurUsers() {
  const cardVariant = {
    offscreen: {
      opacity: 0,
      y: -50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        type: "spring",
        delay: 0.1,
        bounce: 0.6,
      },
    },
  };

  const BoxData = [
    {
      title: `food at ideal temperature to be eaten, and most importantly the quality of food, which was really delicious.`,
    },
    {
      title: `“Congratulations, great services! Looking forward to subscribe for longer periods :)” `,
    },
    {
      title: `“...the food was delicious and the quality was enough to be satisfied, it had more complex flavours that I’d cook for myself in a week day" `,
    },
    {
      title: `"I enjoyed that it arrived very warm and that the packaging wasn’t using unnecessary plastic.” `,
    },
    {
      title: `“The meals were really high quality food and good portions. The meals are varied, tasty, and it's great fun to explore new blends of tastes! "`,
    },
    {
      title: `"The fact that food is always delivered warm is very convenient. It was also great to be able to check on my calorie intake per each meal! "`,
    },
  ];

  return (
    <Section style={{ marginTop: "0rem" }}>
      <h1 className="headings-color text-5xl font-bold  text-center  ">
        What our users say
      </h1>
      <h2 className="text-2xl pharagraph-gray my-8 mt-4 text-center ">
        Our users love what we do!
      </h2>

      <motion.div
        className="grid grid-cols-12 lg:gap-8 md:gap-5 gap-y-5   "
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
              delayChildren: 0.3,
            },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {BoxData.map((data, index) => {
          return (
            <motion.div
              key={index}
              variants={cardVariant}
              className="col-span-12 md:col-span-6 lg:col-span-4   dark-gray-bg p-10 rounded-xl text-white text-lg leading-[2.5rem]"
            >
              {data.title}
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

const BannerSection = styled.div`
  position: relative;

  .bg-image {
    background-image: url(/images/index-page/bg.png);
  }
`;

function Delicious() {
  const ref = useRef(null);

  const deliciousList = [
    {
      src: "/images/index-page/delicious/1.jpg",
    },
    {
      src: "/images/index-page/delicious/2.jpg",
    },
    {
      src: "/images/index-page/delicious/3.jpg",
    },
    {
      src: "/images/index-page/delicious/4.jpg",
    },
    {
      src: "/images/index-page/delicious/5.jpg",
    },
    {
      src: "/images/index-page/delicious/6.jpg",
    },
    {
      src: "/images/index-page/delicious/7.jpg",
    },
    {
      src: "/images/index-page/delicious/8.jpg",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "black",
        overflow: "hidden",
        paddingBottom: "4rem",
        paddingTop: "4rem",
      }}
    >
      <Section style={{ marginBottom: "0rem ", padding: "0rem" }}>
        <h1 className="text-5xl xl:text-6xl mb-20  text-white font-bold">
          Delicious meals, one tap away!
        </h1>
      </Section>
      <SliderMotion baseVelocity={2}>
        {[...deliciousList, ...deliciousList].map((value, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center w-[12rem] h-auto my-4"
            >
              <img
                src={value.src}
                alt=""
                style={{
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "15px",
                }}
              />
            </div>
          );
        })}
      </SliderMotion>
      <SliderMotion baseVelocity={-5}>
        {[...deliciousList, ...deliciousList].map((value, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center w-[12rem] h-auto my-4"
            >
              <img
                src={value.src}
                alt=""
                style={{
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "15px",
                }}
              />
            </div>
          );
        })}
      </SliderMotion>
      <SliderMotion baseVelocity={10}>
        {[...deliciousList, ...deliciousList].map((value, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center w-[12rem] h-auto my-4"
            >
              <img
                src={value.src}
                alt=""
                style={{
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "15px",
                }}
              />
            </div>
          );
        })}
      </SliderMotion>
    </section>
  );
}

function Gallary() {
  const items = [
    {
      src: "/images/index-page/delicious/1.jpg",
      username: "Kaushal",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },

    {
      src: "/images/index-page/delicious/2.jpg",
      username: "Bhanu",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },

    {
      src: "/images/index-page/delicious/3.jpg",
      username: "Akshay",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },

    {
      src: "/images/index-page/delicious/4.jpg",
      username: "Ranveer",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "/images/index-page/delicious/5.jpg",
      username: "Himanshu",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "/images/index-page/delicious/6.jpg",
      username: "Dipanshu",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "/images/index-page/delicious/7.jpg",
      username: "Vinay",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      src: "/images/index-page/delicious/8.jpg",
      username: "Spotify",
      about: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  return (
    <Section
      style={{ backgroundColor: "#000", margin: "0rem", padding: "5rem 0rem" }}
    >
      <div>
        <h1 className=" text-5xl font-bold mb-6 text-white  ">Gallery</h1>
        <GallerySlider list={items} />
      </div>
    </Section>
  );
}

export default function Home() {
  const isWideScreen = useMedia("(max-width:1024px)", true);

  return (
    <Layout>
      <BannerSection>
        <div className=" relative  lg:h-[50rem] flex justify-center items-center">
          <div className="lg:flex absolute h-full w-full   ">
            <div className="lg:w-[60%] h-[60%]   "></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5, stiffness: 25 }}
              className="bg-image lg:w-[40%] h-[40%] lg:h-full  lg:float-none  bg-cover"
            ></motion.div>
          </div>

          <Section className="mt-0 z-[2] relative">
            <div className="lg:flex justify-center items-center">
              <div className="lg:w-[50%] h-full ">
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.3,
                    duration: 0.2,
                    stiffness: 25,
                  }}
                  className="thm-green-color font-semibold mb-4 text-lg"
                >
                  LEAVE YOUR FOOD NEEDS TO US!
                </motion.h2>
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.4,
                    duration: 0.2,
                    stiffness: 25,
                  }}
                  className="xl:text-6xl  text-5xl  font-bold mb-4 leading-[5rem]"
                >
                  Healthy meals at your doorsteps
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.5,
                    duration: 0.2,
                    stiffness: 25,
                  }}
                  className="pharagraph-gray text-lg"
                >
                  We deliver healthy, all-natural cooked food every day based on
                  your nutritional needs
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 0.2,
                    delay: 0.7,
                    stiffness: 25,
                  }}
                  className="mt-4"
                >
                  <Button />
                </motion.div>
              </div>
              <div className="lg:w-[50%] w-full py-10 lg:p-0   flex justify-center items-center relative">
                {isWideScreen ? (
                  <motion.img
                    initial={{ x: 0, opacity: 0, rotateZ: 2 }}
                    animate={{ x: 0, opacity: 1, rotateZ: 0 }}
                    transition={{
                      delay: 0.9,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 40,
                    }}
                    src="/images/index-page/mobile-ui.png"
                    className="w-[35%]  lg:w-[55%] h-auto drop-shadow-2xl"
                    style={{
                      objectFit: "fill",
                      transformOrigin: "bottom right 60px",
                    }}
                    alt="img"
                  />
                ) : (
                  <motion.img
                    initial={{ x: -50, opacity: 0, rotateZ: 2 }}
                    animate={{ x: -100, opacity: 1, rotateZ: 0 }}
                    transition={{
                      delay: 0.9,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 40,
                    }}
                    src="/images/index-page/mobile-ui.png"
                    className="w-[35%]  lg:w-[55%] h-auto drop-shadow-2xl"
                    style={{
                      objectFit: "fill",
                      transformOrigin: "bottom right 60px",
                    }}
                    alt="img"
                  />
                )}
              </div>
            </div>
          </Section>
        </div>
      </BannerSection>

      {/* <Section className="bg-slate-400">
        <div className="flex justify-center items-center ">
          <div className="   ">
            <iframe
              style={{ width: "50rem", height: "30rem" }}
              src="https://www.youtube.com/embed/EbyKdDkmWxg?controls=0"
              title="YouTube video player"
              // frameborder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Section> */}

      <HowItWorks />

      <ProblemSection />

      <AudinceSection />

      <OurStyle />

      <Delicious />

      <OurUsers />

      <Section>
        <h2 className="pharagraph-gray text-xl font-semibold text-center">
          High quality meals tailored to your dietary preferences
        </h2>

        <div
          style={{ borderBottom: "1px solid var(--phagraph-gray-color)" }}
          className="grid grid-cols-12 pb-20 pt-10   "
        >
          <>
            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 30 }}
            >
              <Image
                className="w-[50%] lg:w-full h-auto "
                src={QualityImage_1}
                quality={100}
                alt="img"
              />
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                delay: 0.2,
                duration: 0.2,
                type: "spring",
                stiffness: 30,
              }}
            >
              <Image
                className="w-[50%] lg:w-full h-auto"
                src={QualityImage_2}
                quality={100}
                alt="img"
              />
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                delay: 0.4,
                duration: 0.2,
                type: "spring",
                stiffness: 30,
              }}
            >
              <Image
                className="w-[50%] lg:w-full h-auto"
                src={QualityImage_3}
                quality={100}
                alt="img"
              />
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                delay: 0.6,
                duration: 0.2,
                type: "spring",
                stiffness: 30,
              }}
            >
              <Image
                className="w-[50%] lg:w-full h-auto"
                src={QualityImage_4}
                quality={100}
                alt="img"
              />
            </motion.div>
          </>
          ,
        </div>
      </Section>

      <Section
        className="lg:h-[40rem]"
        style={{
          backgroundColor: "black",
          marginTop: "10rem",
          marginBottom: "0rem",
        }}
      >
        <div className="lg:flex h-full w-full  ">
          <div className="lg:w-2/4 w-full   flex justify-center items-center">
            <div className="">
              <h1 className="text-6xl text-white font-bold">
                Get Access today!
              </h1>
              <h2 className="text-lg text-white mb-8 mt-4">
                Download our app now and check out meal options.
              </h2>
              <div className="flex">
                <motion.div
                  initial={{ opacity: 0, x: -20, rotateZ: -2 }}
                  whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.4, stiffness: 40 }}
                >
                  <Button className="m-2" label="Download for Android  " />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20, rotateZ: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                  transition={{
                    type: "spring",
                    delay: 0.5,
                    duration: 0.4,
                    stiffness: 40,
                  }}
                  viewport={{ once: true }}
                >
                  <Button className="m-2" label="Download for IOS" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 w-full  ">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                delay: 0.5,
                duration: 0.4,
                stiffness: 40,
              }}
              viewport={{ once: true }}
              className="flex justify-center py-14 lg:py-0"
            >
              <Image
                src={Access_1}
                className="lg:w-[50%] w-[30%] lg:-translate-y-[10rem] h-auto drop-shadow-2xl -rotate-12"
                style={{ objectFit: "fill" }}
                alt=""
              />
              <Image
                src={Access_2}
                className="lg:w-[50%] w-[30%] lg:-translate-y-[10rem] h-auto drop-shadow-2xl rotate-12"
                style={{ objectFit: "fill" }}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </Section>

      <Gallary />
    </Layout>
  );
}
