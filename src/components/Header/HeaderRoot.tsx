import { ReactNode } from "react";

type HeaderRootProps = {
  children: ReactNode;
};

export default function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className=" fixed z-10 bg-white w-full h-14 md:h-20 flex justify-between  items-center px-8 md:justify-between md:px-6">
      {children}
    </header>
  );
}
