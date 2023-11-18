import { poppins } from "@/app/ui/fonts";
import { ReactNode } from "react";

type SubTitleProps = {
  children?: ReactNode;
  text?: string;
};

export default function SubTitle({ children, text }: SubTitleProps) {
  return (
    <p className={`${poppins.className} font-normal text-xl text-gray-400`}>
      {children || text}
    </p>
  );
}
