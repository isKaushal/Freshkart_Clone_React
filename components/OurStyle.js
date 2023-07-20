import Section from "./Section";
import { pencil, paperplane, search, settings } from "@/components/icons";

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
        <div className="my-14"></div>
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
