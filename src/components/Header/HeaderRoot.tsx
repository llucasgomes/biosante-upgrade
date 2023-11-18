import { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}

export default function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="w-full h-20 flex justify-between  items-center px-8 md:justify-between md:px-6">
      {children}
    </header>
  );
}
