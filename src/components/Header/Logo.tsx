import Image from "next/image";
import { ReactNode } from "react";

interface LogoProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  style?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      className={`${props.style}`}
    />
  );
}
