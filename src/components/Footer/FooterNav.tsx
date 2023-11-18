import { ReactNode } from "react";

type FooterNav = {
  children: ReactNode;
  style?: string;
};

export default function FooterNav({ children, style = "" }: FooterNav) {
  return <nav className={`${style}`}>{children}</nav>;
}
