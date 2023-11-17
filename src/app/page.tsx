import Carrousel from "@/components/Carrousel/Carrousel";
import Hero from "@/components/Hero/Hero";
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

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="w-full flex justify-evenly md:justify-center gap-5 flex-wrap ">
        {featured_Products.map((produto) => {
          return (
            <Card
              key={produto.nameProduct}
              className="w-[270px] flex  flex-col justify-center items-center"
            >
              <CardHeader>
                <CardTitle className="text-center">
                  {produto.nameProduct}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={produto.image}
                  width={700}
                  height={700}
                  alt={`${produto.nameProduct} - ${produto.description}`}
                />
              </CardContent>
              <CardFooter>
                <CardDescription className="text-center">
                  {produto.description}
                </CardDescription>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Carrousel />
    </main>
  );
}
