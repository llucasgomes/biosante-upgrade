import { Children, ReactNode } from "react";
type ListProps = {
  children: ReactNode;
  style?: string;
};
export default function FooterList({ children, style = "" }: ListProps) {
  return <ul className={`${style}`}>{children}</ul>;
}
