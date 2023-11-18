import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featured_Products } from "@/lib/data";
import Image from "next/image";
import { C_Feature_Product } from ".";

export default function Featured_Products() {
  return (
    <C_Feature_Product.Root>
      <C_Feature_Product.Title text="Produtos em Destaque" />
      <C_Feature_Product.SubTitle text="Produtos em Destaque" />
      <C_Feature_Product.ListCards>
        {featured_Products.map((produto) => {
          return (
            <C_Feature_Product.Card
              key={produto.description}
              image={produto.image}
              nameProduct={produto.nameProduct}
              description={produto.description}
            />
          );
        })}
      </C_Feature_Product.ListCards>
    </C_Feature_Product.Root>
  );
}
