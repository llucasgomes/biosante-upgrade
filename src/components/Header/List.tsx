import { ReactNode } from "react";

interface ListProps {
  children?: ReactNode;
}

export default function List({ children }: ListProps) {
  return <ul className=" flex list-none">{children}</ul>;
}
