const Dashes = () => {
  return (
    <div className="relative flex w-full items-center gap-2.5 before:absolute before:left-[-1rem] before:top-1/2 before:block before:h-[20px] before:w-[20px] before:-translate-y-1/2 before:rounded-full before:border-2 before:border-secondary-15 before:bg-white after:absolute after:right-[-1rem] after:top-1/2 after:block after:h-[20px] after:w-[20px] after:-translate-y-1/2 after:rounded-full after:border-2 after:border-secondary-15 after:bg-white">
      <span className="shadow-dashes block h-0.5 w-full shrink bg-black"></span>
      <span className="shadow-dashes block h-0.5 w-full bg-black"></span>
      <span className="shadow-dashes block h-0.5 w-full bg-black"></span>
      <span className="shadow-dashes block h-0.5 w-full bg-black"></span>
      <span className="shadow-dashes block h-0.5 w-full bg-black"></span>
      <span className="shadow-dashes block h-0.5 w-full shrink bg-black"></span>
    </div>
  );
};

export default Dashes;
