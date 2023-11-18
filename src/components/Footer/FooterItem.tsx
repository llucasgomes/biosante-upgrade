import { LucideProps } from "lucide-react";
import { ElementType, ReactNode } from "react";

type ItemProps = {
  context: string;
  children?: ReactNode;
};

export default function FooterItem({ context, children }: ItemProps) {
  return (
    <li className="flex pl-4 gap-2 py-2">
      {children}
      <p>{context}</p>
    </li>
  );
}
