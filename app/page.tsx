import SectionLabel from "@/components/Atoms/SectionLabel";
import FloatingIconCard from "@/components/Blocks/FloatingIconCard";
import { DashIcon } from "@radix-ui/react-icons";

export default function Home() {
  const data = [
    {
      heading: "Floating Icon Card",
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
      <div className="flex w-[70%] flex-col pt-20 md:flex-row">
        <SectionLabel label="Floating Icon Cards" />
      </div>
    </main>
  );
}
