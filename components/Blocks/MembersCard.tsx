import { raleway } from "@/lib/fonts/font";
import IconBox from "../Atoms/IconBox";
import { TMembersCardProps } from "../types/cards";

const MembersCard = ({ data }: TMembersCardProps) => {
  return (
    <div className="cancel-shadow black-border relative space-y-5 rounded-lg bg-white p-4 shadow-potrude md:p-5">
      <div className="flex items-center justify-between">
        <div className="flex w-[80%] items-center gap-2.5">
          <div className="black-border aspect-square h-[2.725rem] rounded-lg bg-primary-97 md:rounded-[10px]">
            {/* <Image src={data.img} alt="member" width={100} height={100} /> */}
          </div>
          <h3
            className={`${raleway.className} text-xl font-bold text-secondary-10 md:text-2xl`}
          >
            {data.heading}
          </h3>
        </div>
        <IconBox icon={data.icon} />
      </div>

      <div className="black-border space-y-2 rounded-[10px] bg-primary-97 p-4 2xl:rounded-xl">
        <p className="text-lg font-semibold">
          Qualification: {data.qualification}
        </p>
        <p className="font-medium">{data.description}</p>
      </div>
    </div>
  );
};

export default MembersCard;
