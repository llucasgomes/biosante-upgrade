import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
type ProductCardProps = {
  children?: ReactNode;
  nameProduct: string;
  image: string;
  description?: string;
};

export default function Product_Card({
  image,
  nameProduct,
  description,
}: ProductCardProps) {
  return (
    <Card
      key={nameProduct}
      className="w-[270px] flex  flex-col justify-center items-center"
    >
      <CardHeader>
        <CardTitle className="text-center">{nameProduct}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={image}
          width={700}
          height={700}
          alt={`${nameProduct} - ${description}`}
        />
      </CardContent>
      <CardFooter>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardFooter>
    </Card>
  );
}
