const SectionLabel = ({ label }: { label: string }) => {
  return (
    <div className="w-fit rounded-lg border-2 border-black bg-white px-4 py-2 text-sm font-medium text-secondary-20 md:px-5 md:py-2.5 md:text-base xl:text-lg">
      {label}
    </div>
  );
};

export default SectionLabel;
