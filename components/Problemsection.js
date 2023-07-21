import Image from "next/image";
// components
import Button from "./Button";
import Section from "./Section";

// images
import problemImg from "../public/images/index-page/problem.png";

export default function Problem() {
  return (
    <Section>
      <div className="flex items-center">
        <div className="w-1/2">
          <h1 className="font-bold text-5xl mt-8 ">The healthy food service for offices</h1>
          <p className="pharagraph-gray mt-4 text-lg">
            We deliver healthy, all-natural cooked food every day based on the nutritional needs of your employees. Employees of your office can order
            delicious Freshkart meals until 10 AM. Food is then delivered at noon.
          </p>
          <div className="mt-4">
            <Button label="Register my Office" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src={problemImg} width={500} height={500} quality={100} alt="" style={{ aspectRatio: "1/1" }} />
        </div>
      </div>
    </Section>
  );
}
