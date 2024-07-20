import { raleway } from "@/lib/fonts/font";
import SectionLabel from "../Atoms/SectionLabel";

type TSectionHeadingProps = {
  label: string;
  heading: string;
  desc: string;
};
const SectionHeading = ({ label, heading, desc }: TSectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <SectionLabel label={label} />
      <h2 className={`text-4xl font-bold ${raleway.className}`}>{heading}</h2>
      <p className="font-medium">{desc}</p>
    </div>
  );
};

export default SectionHeading;
