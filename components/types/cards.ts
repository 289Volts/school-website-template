export type TFloatingIconCardProps = {
  data: {
    heading: string;
    description: string;
    icon: React.ReactNode;
    idx: number;
  };
  withIcon?: boolean;
};

export type TMembersCardProps = {
  data: {
    heading: string;
    qualification: string;
    description: string;
    icon: React.ReactNode;
    img: string;
  };
};
