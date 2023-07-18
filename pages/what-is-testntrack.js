import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMedia } from "react-use";
import styled from "styled-components";

import { BsFillPlayFill } from "react-icons/bs";

import Herobg from "../public/images/about-page/Hero-saction-bg.png";
import mobileHero from "../public/images/about-page/Untitled-design.png";

// What Makes Test and Track Different Saction icons
import differentIcon5 from "../public/images/about-page/icons/Results.svg";
import differentIcon4 from "../public/images/about-page/icons/Remarks.svg";
import differentIcon3 from "../public/images/about-page/icons/Scheduler.svg";
import differentIcon2 from "../public/images/about-page/icons/Copy-checking.svg";
import differentIcon1 from "../public/images/about-page/icons/question-paper.svg";

// Awards mobile images
import mobileAwards2 from "../public/images/about-page/awards/TestnTrack-ISO-certified.webp";
import mobileAwards1 from "../public/images/about-page/awards/TestnTrack-MIIC-recognised.webp";
import mobileAwards5 from "../public/images/about-page/awards/Sourceforge-Top-Performer-2022.webp";
import mobileAwards3 from "../public/images/about-page/awards/TestnTrack-Startupindia-recognised.webp";
import mobileAwards4 from "../public/images/about-page/awards/Most-Popular-Education-Software-2022.webp";
import mobileAwards6 from "../public/images/about-page/awards/TestnTrack-as-High-User-Satisfaction-2022.webp";

// components
import Layout from "components/Layout";
import CardContainer from "components/Card";
import Section from "@/components/Section";
import Button from "@/components/Button";
// import { ThmButton } from "components/Buttons";
// import IndexStyles from "styles/pages/Index.module.css";

const HeroSection = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3.6rem;
  }

  .heroContent {
    width: 100%;
    height: 100%;
    position: absolute;
    display: grid;
  }

  .heroleft {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    h2 {
      font-size: 3rem;
      font-weight: 200;
      line-height: 3.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      color: var(--dark-gray-color);
    }
  }

  .part {
    margin: 0rem -20% -9rem 0rem;
    padding-left: 30%;
  }

  .heroRight {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iconCircle {
    width: 4rem;
    height: 4rem;
    display: flex;
    margin-left: -4rem;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: #ff6e01;
  }

  .iconCircle::before {
    content: "";
    position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    background-color: #ff6e01;
    animation: ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;

    .iconCircle {
      margin-left: -3rem;
    }

    .hero-text {
      width: 30%;
      margin: 25% 0rem 0rem 20%;
    }
  }
`;

const HeroSectionMobile = styled.div`
  width: 100vw;
  height: 100%;
  .mobileContent {
    padding: 0rem 1rem;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 600px) {
    .mobileContent {
      padding: 0rem 4rem;
    }
  }
`;

const CardBox = styled.div`
  width: 16rem;
  height: 16rem;
  padding: 2rem;
  position: relative;
  z-index: 1;
  cursor: pointer;

  .circle {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: #ffa662;
    transform: scale(0);
  }

  .card-icon {
    font-size: 3.5rem;
  }

  h6 {
    margin-block: 0.5rem;
  }

  p {
    font-size: 13px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
  }

  &:hover {
    .circle {
      transition: all 0.5s ease-in-out;
      transform: scale(1);
    }

    &::before {
      transition: opacity 0.5s linear;
      opacity: 1;
      background: linear-gradient(
        135deg,
        rgba(255, 170, 105, 1) 20%,
        rgba(255, 144, 60, 1) 60%,
        rgba(255, 129, 34, 1) 100%
      );
    }

    h6 {
      color: white;
    }

    p {
      color: white;
    }
  }
`;

const SectionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.smallScreenCol ? "column" : "column-reverse"};
  min-height: 40rem;
  margin-block: 5rem;

  & > * {
    flex: 1;
  }

  img {
    border-radius: 15px;
  }

  .side-text {
    display: flex;
    align-items: center;
  }

  .shadow-box-right {
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  .shadow-box-left {
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  .shadow-box-right::before {
    content: "";

    width: 80%;
    height: 80%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(74, 222, 128);
    background: linear-gradient(
      rgba(74, 222, 128, 1) 0%,
      rgba(74, 222, 128, 1) 28%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: -1;
    transform: rotate(35deg) translateX(15%);
    border-radius: 10%;
  }

  .shadow-box-left::before {
    content: "";
    width: 80%;
    height: 80%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgb(74, 222, 128);
    background: linear-gradient(
      rgba(74, 222, 128, 1) 0%,
      rgba(74, 222, 128, 1) 28%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: -1;
    transform: rotate(-35deg) translateX(-15%);
    border-radius: 10%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SectionSideText = styled.div`
  padding: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  h3 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--dark-gray-color);
  }

  .icon {
    color: var(--thm-base-green);
    font-family: "Teko", sans-serif;
    font-size: 2.5rem;
  }
`;

const SectionText = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;

  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--dark-gray-color);
  }

  .line {
    height: 3px;
    width: 30%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(230, 230, 230, 0.76234243697479) 77%,
      rgba(208, 206, 206, 1) 100%
    );
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const DifferentCard = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: ${(props) =>
    props.smallScreenCol ? "column" : "column-reverse;"};
  margin-block: 10rem;

  .section1-left {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 1rem;

    .card-section-right {
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
    }

    .card-section-left {
      display: flex;
      text-align: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .section1-right {
    flex: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .section1-left {
      flex-direction: row;
      padding-left: 0;

      .card-section-left {
        text-align: left;
        padding-top: 5rem;
        padding-left: 1rem;
      }

      .card-section-right {
        text-align: left;
      }
    }

    .second-card-drop {
      padding-top: 5rem;
      padding-left: 1rem;
    }
  }
`;

const BottomGetStartFooter = styled.div`
  width: 100%;
  border-top: 1px solid #dfdfdfb8;
  background: linear-gradient(
      90deg,
      rgba(13, 13, 13, 0.5),
      rgba(13, 13, 13, 0.5),
      rgba(13, 13, 13, 0.5)
    ),
    url(/images/about-page/about-page-formbg.webp);
  padding: 3rem;

  h3 {
    color: white;
  }

  p {
    color: white;
  }

  .inputWrap {
    height: 3.5rem;
  }

  .inputWrap > input {
    padding: 1rem;
    height: 3rem;
    width: 20rem;
    color: #686a6f;
    background: #cfcfd1;
    border-radius: 5px;
  }

  .textareaWrap > textarea {
    color: #686a6f;
    background: #cfcfd1;
    padding: 1rem;
    width: 20rem;
    border-radius: 5px;
  }

  .btnWrap {
    width: 100%;
    display: grid;
  }

  .formWrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    .mainformWrap {
      padding: 0rem 10rem;
    }
  }
`;

// function Faq() {
//   const isWideScreen = useMedia("(min-width: 1024px)", true);
//   const [list] = useState([
//     {
//       item: 1,
//       isActive: true,
//       title:
//         "What are the advantages of using test and track for offline exams?",
//       content:
//         "Although this is a prevalent belief, there is still a potential for question paper leaking and malpractice even if offline tests are considered safe and malpractice-free. Online tests offer safe storage to avoid question paper leaks, and proctoring may be used to stop examination misconduct.",
//     },
//     {
//       item: 2,
//       isActive: true,
//       title: "Can online tests identify plagiarism?",
//       content:
//         "Yes, to answer briefly. Cheating on online tests is detectable. Examinees find cheating challenging because of authentication methods, internet surveillance, data forensics, and proctoring (to name a few).",
//     },
//     {
//       item: 3,
//       isActive: true,
//       title: "What is exam preparation software?",
//       content:
//         "Exam software is a programme that facilitates the design and administration of online tests. The computer-based assessment choices offered by the online exam software enable the testing process to be automated. All assessment data can be gathered and arranged by the exam administration software system in one location.",
//     },
//   ]);

//   const FaqBox = ({ item }) => {
//     return (
//       <div className={IndexStyles.accordionBlock}>
//         <div className={IndexStyles.accordionBtn}>
//           <div>
//             <span className={IndexStyles.accordionCount}>{item.item}.</span>
//             {item.title}
//           </div>
//         </div>
//         <div>
//           <div className={IndexStyles.accordionContent}>
//             <div>{item.content}</div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <Section className="container">
//       <div
//         className={
//           isWideScreen
//             ? IndexStyles.faqSectionContainer
//             : IndexStyles.faqSectionContainerMobile
//         }
//       >
//         <h2>
//           FAQ<span className={IndexStyles.dot}>&rsquo;</span>s
//         </h2>
//         <ul className={clsx("row", IndexStyles.accordionBox)}>
//           {list.map((item, i) => {
//             return (
//               <div key={i} className="col-12">
//                 <FaqBox item={item} />
//               </div>
//             );
//           })}
//         </ul>
//         <div className=" d-flex justify-content-center  ">
//           <Link legacyBehavior href="/Faq">
//             <a target="_blank">{/* {/* <ThmButton>read more</ThmButton> */}</a>
//           </Link>
//         </div>
//       </div>
//     </Section>
//   );
// }

function Header() {
  return (
    <Head>
      <title>Examination Services Provider - Test and Track</title>
      <link href="https://testntrack.com/what-is-testntrack" rel="canonical" />
      <meta
        name="description"
        content="Looking for a copy checking platform for your coaching. We are the best examination services provider for coaching and schools Contact us : +918949986554"
      />
      <meta
        name="keywords"
        content="Copy checking platform, Examination services provider, Mobile based assessment platform, Examination and Evaluation Platform, Onscreen EvaluationPlatfrom "
      />
    </Head>
  );
}

export default function WhatIsPage() {
  const isWideScreen = useMedia("(min-width: 1024px)", true);
  const isExtraWideScreen = useMedia("(min-width: 1680px)", true);

  return (
    <Layout>
      <Header />
      {isWideScreen ? (
        <HeroSection>
          <Image alt="Hero background" src={Herobg} />
          <div className="heroContent">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <div className="heroleft   ">
                <div className="part">
                  <h2>Examination Services Provider</h2>
                  <p>
                    TestnTrack is an AI backed, SaaS platform and a one-stop
                    shop for all your <br />
                    examination needs, including physical and digital
                    examination, instant solution key, customised papers{" "}
                    {isExtraWideScreen ? <br /> : null} based on latest board
                    pattern, comprehensive analysis report, audio explanation
                    for each question and result declaration within 360 minutes.
                    It is here to build the most advanced and quick-witted
                    examination services provider for K-12, entrance, and
                    professional exams.
                  </p>
                  <a
                    href="https://youtu.be/9UApmDjishY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="my-4">
                      <Button />
                    </div>
                  </a>
                </div>
              </div>
              <div className="heroRight col  ">
                <a
                  href="https://youtu.be/EbyKdDkmWxg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="iconCircle">
                    <BsFillPlayFill style={{ color: "white", scale: "2" }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </HeroSection>
      ) : (
        <HeroSectionMobile>
          <div className="heroRight col">
            <div className="iconCircle">
              <Image
                style={{ width: "100%", height: "100%" }}
                alt="TestnTrack Banner"
                src={mobileHero}
              />
            </div>
          </div>
          <div className="heroleft col  ">
            <div style={{ textAlign: "center" }} className="mobileContent">
              <h2>Examination Services Provider</h2>
              <p>
                TestnTrack is an AI backed, SaaS platform and a one-stop shop
                for all your examination needs, including physical and digital
                examination, instant solution key, customised papers based on
                latest board pattern, comprehensive analysis report, audio
                explanation for each question and result declaration within 360
                minutes. It is here to build the most advanced and quick-witted
                examination services provider for K-12, entrance, and
                professional exams.
              </p>
            </div>
            <div className="btn">
              <a
                href="https://youtu.be/9UApmDjishY"
                target="_blank"
                rel="noreferrer"
              >
                <Button />
              </a>
            </div>
          </div>
        </HeroSectionMobile>
      )}

      <DifferentCard>
        <div className="flex">
          <div className="section1-left">
            <div className="card-section-right">
              <CardContainer>
                <CardBox>
                  <div className="circle"></div>
                  <div className="card-icon">
                    <Image
                      src={differentIcon1}
                      width={56}
                      height={56}
                      alt="icon_1"
                    />
                  </div>
                  <h6>Customised Question Paper</h6>
                  <p>
                    We are burgeoning to transform the way question papers are
                    developed by utilising up-to-the-minute information on the
                    latest board pattern as an asset.
                  </p>
                </CardBox>
              </CardContainer>
              <CardContainer>
                <CardBox>
                  <div className="circle"></div>
                  <div className="card-icon">
                    <Image
                      src={differentIcon2}
                      width={56}
                      height={56}
                      alt="icon_2"
                    />
                  </div>
                  <h6>Shedule Your Exams </h6>
                  <p>
                    All thanks to our AI-enabled system, we are all set to
                    prepare micro study plans for students, and regularly update
                    them on the upcoming tests and exams via notifications.
                  </p>
                </CardBox>
              </CardContainer>
              <CardContainer>
                <CardBox>
                  <div className="circle"></div>
                  <div className="card-icon">
                    <Image
                      src={differentIcon5}
                      width={56}
                      height={56}
                      alt="icon_5"
                    />
                  </div>
                  <h6>Analytical Result</h6>
                  <p>
                    We amalgamate conventional techniques with our AI evaluation
                    system with 98% accuracy. AI enabled comprehensive results
                    and a digital answer key is provided within 360 minutes to
                    set the top-notch benchmark.
                  </p>
                </CardBox>
              </CardContainer>
            </div>
            <div className="card-section-left">
              <CardContainer>
                <CardBox>
                  <div className="circle"></div>
                  <div className="card-icon">
                    <Image
                      src={differentIcon4}
                      width={56}
                      height={56}
                      alt="icon_4"
                    />
                  </div>
                  <h6>Copy Checking</h6>
                  <p>
                    Your exam answer sheets will be checked by our Subject
                    Matter Experts (SMEs), as we want to fill the void between
                    copy checking and result declaration.
                  </p>
                </CardBox>
              </CardContainer>
              <CardContainer>
                <CardBox>
                  <div className="circle"></div>
                  <div className="card-icon">
                    <Image
                      style={{ filter: "grayscale(100%)" }}
                      src={differentIcon3}
                      width={56}
                      height={56}
                      alt="icon_3"
                    />
                  </div>
                  <h6>Personalised Remarks For Answers</h6>
                  <p>
                    One foremost differentiating facet is our personalised
                    evaluation of a student&apos;s weak areas other than just
                    providing them with the answer key. Our team ensures that we
                    outline students&apos; errors and bestow them with a
                    personalised audio explanation.
                  </p>
                </CardBox>
              </CardContainer>
            </div>
          </div>
          <div className="section1-right">
            <SectionText>
              <h3>What Makes Test and Track Different </h3>
              <p>
                Test and Track come to the fore with an excellent result and
                performance oriented platform for evaluating the answer sheet,
                outlining the weak areas and errors with a personalised audio
                explanation and developing Micro study plans based on each
                student&apos;s performance. We will be your guide if you want to
                conduct SWOT analysis of your child. Moreover, we have a
                plethora of services that will amaze parents, principals,
                teachers, and students.
              </p>
            </SectionText>
          </div>
        </div>
      </DifferentCard>

      <Section>
        <div className="">
          <h1 className=" text-5xl text-center  ">
            Test and Track - Awarded Best Examination Sevices Provider <br />{" "}
            {/* <span className={IndexStyles.dot}> Know Why ? </span>{" "} */}
          </h1>
          <SectionBox>
            <div className="side-text">
              <SectionSideText>
                <div className="icon">01.</div>

                <h3>Get Your Copies Checked In Just 360 Minutes</h3>
                <p>
                  Living in an epoch where convenience and comfort is our
                  topmost priority, board evaluators and teachers want a
                  quick-witted and result-oriented platform. Guess what? <br />
                  Just upload the answer copies and country&apos;s top board
                  evaluators will check them just in time to add human touch to
                  the process. Now no more waiting period, serene, and detailed
                  result in just 6 hours.
                </p>
              </SectionSideText>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <div className="shadow-box-right">
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    width={645}
                    height={645}
                    src="/images/about-page/mobileui/MobileUi01.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SectionBox>
        </div>

        <div className="">
          <SectionBox smallScreenCol={true}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div>
                <div className="shadow-box-left">
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    width={645}
                    height={645}
                    src="/images/about-page/mobileui/MobileUi04.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="side-text">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <SectionSideText>
                  <div className="icon">02.</div>

                  <h3>Mobile Based Assessment Technology </h3>
                  <p>
                    Assessment delivery via personal digital assistants and
                    other electronic devices in a hassle free manner without the
                    need to switch to your laptop/desktop.
                    <br />
                    Our Mobile-based assessment (MBA) platform gives us a unique
                    edge when combined with our cutting-edge solutions to
                    students, parents, principals/teachers. On Test and Track,
                    you are just one step away from getting an all-inclusive and
                    extensive package of examination report.
                  </p>
                </SectionSideText>
              </div>
            </div>
          </SectionBox>
        </div>

        <div className="">
          <SectionBox>
            <div className="side-text">
              <SectionSideText>
                <div className="icon">03.</div>

                <h3>Personalised remarks for students </h3>
                <p>
                  One of the most enticing features of Test and Track is our
                  analysed answer copy, outlining the errors of each student by
                  personalising the audio explanation using candidate
                  examination and evaluation software. <br />
                  Adaptive learning is the pedestal of our growth. By
                  personalising each student&apos;s performance report, SWOT
                  analysis, and rank analysis in an adaptive manner. Our agenda
                  is to adapt as per a student&apos;s requirement.
                </p>
              </SectionSideText>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <div className="shadow-box-right">
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    width={645}
                    height={645}
                    src="/images/about-page/mobileui/MobileUi03.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SectionBox>
        </div>

        <div className="">
          <SectionBox smallScreenCol={true}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div>
                <div className="shadow-box-left">
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    width={645}
                    height={645}
                    src="/images/about-page/mobileui/MobileUi02.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="side-text">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <SectionSideText>
                  <div className="icon">04.</div>

                  <h3>Analytical performance result</h3>
                  <p>
                    With the efficiency of our 600+ board verified evaluators
                    and AI with 98% accuracy, we analyse each student&apos;s
                    performance amalgamating both technology and human touch.
                  </p>
                </SectionSideText>
              </div>
            </div>
          </SectionBox>
        </div>
      </Section>

      {isWideScreen ? (
        <>
          <div style={{ display: "flex", marginBottom: "5rem" }}>
            <div style={{ flex: 1, paddingLeft: "5rem" }}>
              <SectionSideText>
                <h1>Award & Recognition</h1>
                <h3>
                  For being
                  <span
                    style={{ textTransform: "capitalize" }}
                    className="thm-green-color"
                  >
                    {" "}
                    India&apos;s first & fastest copy checking platform
                  </span>
                </h3>

                <p>
                  TestnTrack is India&apos;s first ever copy checking platform
                  recognised by StartupIndia, Edupreneur Village, and certified
                  by ISO 9001 2015. Moreover, it has won Top performer
                  recognition by SourceForge in summer 2022 and highest user
                  satisfaction award from Crozdesk in the same year.
                </p>
              </SectionSideText>
            </div>

            <div
              style={{
                flex: 1,
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px 0 0 10px",
                }}
                quality={100}
                width={800}
                height={500}
                src="/images/about-page/awards/Testntrack-awards.webp"
                alt="award image"
              />
            </div>
          </div>
        </>
      ) : (
        <div style={{ marginBottom: "5rem" }} className="container ">
          <div>
            <SectionSideText>
              <h3>Award & Recognition</h3>
              <h4>
                For being
                <span
                  style={{ textTransform: "capitalize" }}
                  className="thm-green-color"
                >
                  India&apos;s first & fastest copy checking platform{" "}
                </span>
              </h4>

              <p>
                TestnTrack is India&apos;s first ever copy checking platform
                recognised by StartupIndia, Edupreneur Village, and certified by
                ISO 9001 2015. Moreover, it has won Top performer recognition by
                SourceForge in summer 2022 and highest user satisfaction award
                from Crozdesk in the same year.
              </p>
            </SectionSideText>
          </div>

          <div
            style={{
              width: "100%",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              quality={100}
              src={mobileAwards1}
              width={300}
              height={300}
              alt="mobile awards"
            />
            <Image
              quality={100}
              src={mobileAwards2}
              width={300}
              height={300}
              alt="mobile awards"
            />
            <Image
              quality={100}
              src={mobileAwards3}
              width={300}
              height={300}
              alt="mobile awards"
            />
            <Image
              quality={100}
              src={mobileAwards4}
              width={300}
              height={300}
              alt="mobile awards"
            />
            <Image
              quality={100}
              src={mobileAwards5}
              width={300}
              height={300}
              alt="mobile awards"
            />
            <Image
              quality={100}
              src={mobileAwards6}
              width={300}
              height={300}
              alt="mobile awards"
            />
          </div>
        </div>
      )}

      {/* <Bannar/> */}

      {/* <Faq /> */}
      <BottomGetStartFooter>
        <Section style={{ marginBottom: "0rem" }}>
          <div className="mainformWrap">
            <div className="grid grid-cols-12 ">
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="  lg:col-span-6 col-span-12 "
              >
                <div>
                  <h1 className="font-bold text-4xl text-white   ">
                    Ready to get started ?
                  </h1>
                  <p>
                    Get in touch, or create an account. We are 24/7 available
                  </p>
                </div>
              </div>
              <div className="formWrap lg:col-span-6 col-span-12 ">
                <form
                  style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "10px",
                  }}
                  onSubmit={(event) => {
                    event.preventDefault();
                    const form = new FormData(event.currentTarget);

                    form.forEach((value, key) => {
                      console.log(key, value);
                    });
                  }}
                >
                  <div className="inputWrap">
                    <input name="name" type="text" placeholder="Name*" />
                  </div>
                  <div className="inputWrap">
                    <input name="email" type="email" placeholder="Email*" />
                  </div>
                  <div className="inputWrap">
                    <input
                      name="contact"
                      type="number"
                      placeholder="Contact*"
                    />
                  </div>
                  <div className="textareaWrap">
                    <textarea
                      style={{ fontFamily: "Teko, sans-serif" }}
                      name="query"
                      cols="30"
                      placeholder="Query*"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="btnWrap">
                    <Button style={{ borderRadius: "5px" }} label="SEND" />
                    {/* {/* <ThmButton type="submit">Send</ThmButton> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </BottomGetStartFooter>
    </Layout>
  );
}
