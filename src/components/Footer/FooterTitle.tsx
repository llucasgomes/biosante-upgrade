import { poppins } from "@/app/ui/fonts";

type TitleProps = {
  text: string;
  style?: string;
};

export default function FooterTitle({ text, style }: TitleProps) {
  return (
    <h2
      className={`${poppins.className} font-bold text-xl text-[#372428] ${style}`}
    >
      {text}
    </h2>
  );
}
