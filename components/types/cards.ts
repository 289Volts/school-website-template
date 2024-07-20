export type TFloatingIconCardProps = {
  data: {
    heading: string;
    description: string;
    icon: React.ReactNode;
    idx?: number;
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

export type TTestimonialCardProps = {
  data: {
    heading: string;
    description: string;
    rating: 1 | 2 | 3 | 4 | 5;
    gender: "male" | "female";
  };
};
