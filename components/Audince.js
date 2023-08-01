// components
import Image from "next/image";
import Section from "./section";

// images

const cardArray = [
  {
    image: "/images/index-page/delicious/1.jpg",
    heading: "Hello this is card",
    pahargraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex omnis quo blanditiis animi repudiandae? Repudiandae temporibus nostrum tempore commodi magnam facere enim facilis, deleniti aut ipsam esse, ipsa corporis.",
  },
  {
    image: "/images/index-page/delicious/2.jpg",
    heading: "Hello this is card",
    pahargraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex omnis quo blanditiis animi repudiandae? Repudiandae temporibus nostrum tempore commodi magnam facere enim facilis, deleniti aut ipsam esse, ipsa corporis.",
  },
  {
    image: "/images/index-page/delicious/3.jpg",
    heading: "Hello this is card",
    pahargraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex omnis quo blanditiis animi repudiandae? Repudiandae temporibus nostrum tempore commodi magnam facere enim facilis, deleniti aut ipsam esse, ipsa corporis.",
  },
];

export default function Audience() {
  return (
    <Section>
      <div>
        <h1 className="font-bold text-5xl text-center">
          Hello this is <span className="thm-green-color">Audience</span>
        </h1>
        <p className="pharagraph-gray mt-4 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ex
          omnis quo blanditiis animi repudiandae? Repudiandae temporibus nostrum
          tempore commodi magnam facere enim facilis, deleniti aut ipsam esse,
          ipsa corporis.
        </p>
        <div className="flex flex-wrap justify-center items-center mt-8">
          {cardArray.map((data, index) => {
            return (
              <div
                className="w-[380px] m-4 col-span-12 md:col-span-6 lg:col-span-4"
                key={index}
              >
                <div className="animate-flip flex justify-center w-full">
                  <Image
                    src={data.image}
                    alt={data.image}
                    quality={100}
                    width={120}
                    height={120}
                    style={{ aspectRatio: "1/1" }}
                    className="flip-image rounded-full border-[0.4rem] border-x-[#4ade80] "
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="font-bold text-3xl">
                    {index + 1}. {data.heading}
                  </h2>
                </div>
                <div>
                  <p className="pharagraph-gray mt-4 text-lg text-center px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dolor enim nam ullam ipsam provident quidem
                    molestias? Alias explicabo sequi in! Nihil assumenda
                    repellat itaque qui unde? Possimus, eaque excepturi?
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
