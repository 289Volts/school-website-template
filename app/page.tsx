import MembersCard from "@/components/Blocks/MembersCard";
import { DashIcon } from "@radix-ui/react-icons";

export default function Home() {
  const data = [
    {
      heading: "Ms. Emily Hernandez",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashIcon className="h-6 w-6 text-secondary-10" />,
    },
    {
      heading: "Floating Icon Card2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashIcon className="h-6 w-6 text-secondary-10" />,
    },
    {
      heading: "Floating Icon Card3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashIcon className="h-6 w-6 text-secondary-10" />,
    },
    {
      heading: "Floating Icon Card4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <DashIcon className="h-6 w-6 text-secondary-10" />,
    },
  ];
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <div className="flex w-[90%] flex-col pt-20 md:flex-row">
        <MembersCard data={data[0]} />
      </div>
    </main>
  );
}
