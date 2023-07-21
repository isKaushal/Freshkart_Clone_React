import Section from "../components/Section";
import { Pencil, Paperplane, Search, Settings } from "@/components/icons";

const cardArray = [
  {
    icon: <Search />,
    heading: "SCREENING",
    pharagraph: "The educators fills up the form and enter the basic details and sent it for screening",
  },
  {
    icon: <Pencil />,
    heading: "SCHEDULING",
    pharagraph: "Once the screening is done, a meeting is used to get scheduled within the required domain.",
  },
  {
    icon: <Settings />,
    heading: "ON BOARDING CHECKLIST",
    pharagraph: "After meeting gets successful. the required form is used to send to the applicants for profiling.",
  },
  {
    icon: <Paperplane />,
    heading: "EDUCATORS BENEFITS",
    pharagraph: "When you create your portfolio, you can send it to anyone & anyone can approach you for business only when you want.",
  },
];

export default function OurStyle() {
  return (
    <Section>
      <div>
        <div>
          <h1 className="uppercase text-5xl font-bold text-center">
            <span className="thm-green-color">our</span> working style
          </h1>
          <h2 className="uppercase text-xl font-bold text-center">
            how <span className="thm-green-color"> we work</span>
          </h2>
          <p className="pharagraph-gray mt-4 text-lg text-center px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aliquid! Perferendis obcaecati minima aspernatur dolores facere
            iure aliquam soluta expedita quibusdam doloremque repudiandae, exercitationem autem recusandae adipisci sequi?
          </p>
        </div>
        <div className="my-14">
          <div className="grid grid-cols-12">
            {cardArray.map((data, index) => {
              return (
                <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center " key={index}>
                  <div className="h-full">
                    <div className="flex justify-center items-center my-10 lg:mt-0 relative ">
                      <hr className=" lg:border-[1.5px] lg:border-dashed lg:border-[#fb8827] lg:absolute lg:w-full" />
                      <div className="w-20 h-20 flex justify-center items-center border-2 border-[#fb8827] rounded-lg text-lg thm-orange-color bg-white z-[1] ">
                        {data.icon}
                      </div>
                    </div>
                    <div className="text-center">
                      <h2 className="uppercase text-2xl font-bold text-center thm-green-color">{data.heading}</h2>
                      <p className="pharagraph-gray mt-2 text-base text-center px-2">{data.pharagraph}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="pharagraph-gray mt-4 text-lg text-center px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, aliquid! Perferendis obcaecati minima aspernatur dolores facere
            iure aliquam soluta expedita quibusdam doloremque repudiandae, exercitationem autem recusandae adipisci sequi?
          </p>
        </div>
      </div>
    </Section>
  );
}
