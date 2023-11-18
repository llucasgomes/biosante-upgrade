import { poppins } from "@/app/ui/fonts";
import { ReactNode } from "react";

type TitleProps = {
  children?: ReactNode;
  text?: string;
};

export default function Title({ children, text }: TitleProps) {
  return (
    <h2 className={`${poppins.className} font-bold text-2xl`}>
      {children || text}
    </h2>
  );
}
