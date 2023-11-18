import { ReactNode } from "react";

type FooterRootProps = {
  children: ReactNode;
  style?: string;
};

export default function FooterRoot({ children,style="" }: FooterRootProps) {
  return (
    <footer className={`${style} w-full gap-10  h-auto flex flex-col justify-around items-center  sm:flex-row `}>
      {children}
    </footer>
  );
}
