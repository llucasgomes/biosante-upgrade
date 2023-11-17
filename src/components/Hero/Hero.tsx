import { Banner } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex content-container ">
      <Image
        src={Banner[0].banner.image}
        width={1000}
        height={500}
        alt={Banner[0].banner.alt}
        className="w-full h-full object-contain "
      />
      <Image
        src={Banner[0].atriz.image}
        width={1000}
        height={500}
        alt={Banner[0].atriz.alt}
        className="w-full h-full object-contain hidden md:block"
      />
    </section>
  );
}
