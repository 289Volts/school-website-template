import { TTestimonialCardProps } from "@/components/types/cards";
import { raleway } from "@/lib/fonts/font";

export default function Home() {
  const data: TTestimonialCardProps["data"][] = [
    {
      heading: "Ms. Emily Hernandez",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5,
      gender: "female",
    },
    {
      heading: "Floating Icon Card2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 3,
      gender: "male",
    },
  ];
  // const data = [
  //   {
  //     heading: "Ms. Emily Hernandez",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     icon: <DashIcon className="h-6 w-6 text-secondary-10" />,
  //   },
  //   {
  //     heading: "Floating Icon Card2",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     icon: <DashIcon className="h-6 w-6 text-secondary-10" />,
  //   },
  // ];

  const heading = "Where Young Minds Blossom and ;Dreams Take Flight.";

  const [black, orange] = heading.split(";");
  return (
    <main className="w-90 md:w-88 mx-auto">
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="h-[300px] w-[48%] bg-primary-80"></div>
        <div className="flex flex-col text-center lg:w-[48%] lg:text-left">
          <p className="mb-2.5 w-fit border-b-2 border-b-secondary-15 pb-1.5 font-medium text-secondary-15">
            Welcome to Little Learners Academy
          </p>
          <div className="space-y-4">
            <h1
              className={`${raleway.className} text-3xl font-extrabold leading-[1.3] md:text-[2.5rem]`}
            >
              <span className="">{black}</span>
              <span className="text-primary-65">{orange}</span>
            </h1>
            <p className="font-medium text-secondary-20 lg:text-lg">
              Our kindergarten school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>
          </div>
          <div className="primary-card-border mt-8 flex w-full flex-col rounded-[10px] bg-primary-95 p-8 text-center">
            <div className="flex flex-col">
              <span className="text-[2.125rem] font-extrabold">+7000</span>
              <span className="font-medium">Students Passed Out</span>
            </div>
            <hr className="my-4 h-[3px] bg-secondary-15" />
            <div className="flex flex-col">
              <span className="text-[2.125rem] font-extrabold">+37</span>
              <span className="font-medium">Awards & Recognitions</span>
            </div>
            <hr className="my-4 h-[3px] bg-secondary-15" />
            <div className="flex flex-col">
              <span className="text-[2.125rem] font-extrabold">+15</span>
              <span className="font-medium">Experience Educators</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

{
  /* <div className="flex w-[90%] flex-col pt-20 md:flex-row">
        {data.map((data, idx) => (
          <TestimonialCard key={idx} data={data} />
        ))}
      </div> */
}
