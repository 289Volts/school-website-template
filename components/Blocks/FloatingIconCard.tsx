import { raleway } from "@/lib/fonts/font";
import { TFloatingIconCardProps } from "../types/flotingIconCard";

const FloatingIconCard = ({ data, withIcon }: TFloatingIconCardProps) => {
  return (
    <div className="">
      {!withIcon && (
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center">
            <div
              className={`shadow-verticalDashes h-10 w-0.5 bg-black md:hidden ${data.idx === 0 ? "hidden" : "block"}`}
            />
            <div className="w-fit rounded-lg border-2 border-secondary-15 bg-white p-1.5 px-4 pb-[9px] shadow-potrude">
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
      <div className="cancel-shadow relative rounded-lg border-2 border-secondary-15 bg-white p-4 shadow-potrude md:p-5">
        {withIcon ? (
          <div className="absolute top-[-1.2rem] rounded-lg border-2 border-secondary-15 bg-primary-90 p-1.5">
            {data.icon}
          </div>
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
