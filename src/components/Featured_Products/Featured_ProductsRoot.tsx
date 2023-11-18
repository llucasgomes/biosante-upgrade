import { ReactNode } from "react";
type Featured_ProductsRootProps = {
  children: ReactNode;
};

export default function Featured_ProductsRoot({
  children,
}: Featured_ProductsRootProps) {
  return (
    <section className="w-full flex flex-col justify-evenly items-center md:justify-center gap-5 flex-wrap mt-10">
      {children}
    </section>
  );
}
