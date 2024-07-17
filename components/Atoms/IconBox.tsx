import React from "react";

const IconBox = ({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} black-border rounded-md bg-primary-90 p-1.5 md:rounded-lg`}
    >
      {icon}
    </div>
  );
};

export default IconBox;
