import femaleAvatar from "@/public/assets/images/cards/testimonialFemale.svg";
import maleAvatar from "@/public/assets/images/cards/testimonialMale.svg";
import Image from "next/image";
import { TTestimonialCardProps } from "../types/cards";
import { Star } from "./SvgIcons";

const TestimonialCard = ({ data }: TTestimonialCardProps) => {
  return (
    <div className="card-border space-y-7 rounded-md p-4 text-center md:rounded-lg">
      <div className="rounded-full p-1">
        <Image
          src={data.gender === "male" ? maleAvatar : femaleAvatar}
          alt=""
          className=""
        />
        <h3 className="text-lg font-semibold xl:text-xl">Heading</h3>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Star />
      </div>
      <p className="font-medium xl:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
        temporibus! Ratione velit perspiciatis commodi doloribus.
      </p>
    </div>
  );
};

export default TestimonialCard;
