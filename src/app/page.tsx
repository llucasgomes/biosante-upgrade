import Carrousel from "@/components/Carrousel/Carrousel";
import Featured_Products from "@/components/Featured_Products/Featured _Products";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured_Products />
      <Carrousel />
    </main>
  );
}
