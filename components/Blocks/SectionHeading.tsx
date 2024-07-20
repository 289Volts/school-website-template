import { raleway } from "@/lib/fonts/font";
import SectionLabel from "../Atoms/SectionLabel";

type TSectionHeadingProps = {
  label: string;
  heading: string;
  desc: string;
};
const SectionHeading = ({ label, heading, desc }: TSectionHeadingProps) => {
  return (
    <div className="mx-auto flex max-w-[700px] flex-col items-center gap-2.5 text-center lg:gap-3.5">
      <SectionLabel label={label} />
      <h2 className={`text-4xl font-bold lg:text-5xl ${raleway.className}`}>
        {heading}
      </h2>
      <p className="font-medium">{desc}</p>
    </div>
  );
};

export default SectionHeading;
