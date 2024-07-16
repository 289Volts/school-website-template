import Faq from "@/components/Blocks/Faq";

export default function Home() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="flex w-[70%] flex-col gap-4 md:flex-row">
        {" "}
        <Faq id={["1", "2"]} />
        <Faq id={["3", "4"]} />
      </div>
    </main>
  );
}
