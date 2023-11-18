import { ReactNode } from "react";

type ItemProps = {
  text: string;
  link?: string;
  children?: ReactNode;
};

export default function Item(props: ItemProps) {
  return <li className="block mx-4 hover:cursor-pointer">{props.text}</li>;
}
