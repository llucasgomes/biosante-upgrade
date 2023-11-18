import { ReactNode } from "react";

type FooterContentProps = {
  children: ReactNode;
};

export default function FooterContent({ children }: FooterContentProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {children}
    </div>
  );
}
