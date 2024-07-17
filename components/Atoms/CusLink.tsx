import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const CusLink = ({ path }: { path: string }) => {
  return (
    <Link
      href={path}
      className="cancel-shadow black-border flex w-full items-center gap-2.5 rounded-md bg-primary-90 py-3 font-medium shadow-potrude md:rounded-lg"
    >
      <span className="text-secondary-20 md:text-lg 2xl:text-xl">
        Learn More
      </span>{" "}
      <ArrowRightIcon className="aspect-square h-3.5 text-secondary-15 md:h-4 2xl:h-5" />
    </Link>
  );
};

export default CusLink;
