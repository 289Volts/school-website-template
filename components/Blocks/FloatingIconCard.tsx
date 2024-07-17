import { raleway } from "@/lib/fonts/font";
import IconBox from "../Atoms/IconBox";
import { TFloatingIconCardProps } from "../types/cards";

const FloatingIconCard = ({ data, withIcon }: TFloatingIconCardProps) => {
  return (
    <div className="">
      {!withIcon && (
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center">
            <div
              className={`shadow-verticalDashes h-10 w-0.5 bg-black md:hidden ${data.idx === 0 ? "hidden" : "block"}`}
            />
            <div className="card-border w-fit rounded-lg bg-white p-1.5 px-4 pb-[9px]">
              {/* {data.icon} */}
              <span
                className={`${raleway.className} text-4xl font-extrabold text-secondary-10 md:text-[40px]`}
              >
                {data.idx + 1 <= 9 ? "0" + (data.idx + 1) : data.idx + 1}
              </span>
            </div>
            <div className="shadow-verticalDashes relative h-10 w-0.5 bg-black before:absolute before:left-1/2 before:top-[-0.6rem] before:block before:h-[20px] before:w-[20px] before:-translate-x-1/2 before:rounded-full before:border-2 before:border-secondary-15 before:bg-white" />
          </div>
        </div>
      )}
      <div className="cancel-shadow card-border relative rounded-lg bg-white p-4 md:p-5">
        {withIcon ? (
          <IconBox className="absolute top-[-1.2rem]" icon={data.icon} />
        ) : null}
        <h3
          className={`${raleway.className} my-2 text-xl font-bold text-secondary-10 md:text-2xl`}
        >
          {data.heading}
        </h3>
        <p className="font-medium">{data.description}</p>
      </div>
    </div>
  );
};

export default FloatingIconCard;
