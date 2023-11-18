import { ReactNode } from "react";

interface ItemProps {
  text: string;
  children?: ReactNode;
}

export default function Item({ children }: ItemProps) {
  return <li className="block mx-4 hover:cursor-pointer">{children})</li>;
}
