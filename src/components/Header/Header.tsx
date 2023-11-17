import Image from "next/image";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <header className="w-full h-20 flex justify-between  items-center px-8 md:justify-between md:px-6">
      <MenuMobile />
      <Image src={"/logo.png"} width={133} height={60} alt="Logo Biosanté" />
      <nav className=" w-auto  hidden md:block ">
        <ul className=" flex list-none">
          <li className="block mx-4 hover:cursor-pointer">Inicio</li>
          <li className="block mx-4 hover:cursor-pointer">Produtos</li>
          <li className="block mx-4 hover:cursor-pointer">Prescitos</li>
          <li className="block mx-4 hover:cursor-pointer">Sobre</li>
          <li className="block mx-4 hover:cursor-pointer">Estudos</li>
        </ul>
      </nav>
    </header>
  );
}
