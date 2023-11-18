import { ReactNode } from "react";

type ListCardsProps = {
  children: ReactNode;
};

export default function List_Cards({ children }: ListCardsProps) {
  return (
    <div className="w-full flex  justify-evenly md:justify-center gap-5 flex-wrap ">
      {children}
    </div>
  );
}
