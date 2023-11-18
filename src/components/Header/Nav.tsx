import { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

export default function Nav({ children }: NavProps) {
  return <nav className=" w-auto  hidden md:block ">{children}</nav>;
}
