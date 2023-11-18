import MenuMobile from "./MenuMobile";
import { C_Header } from ".";

export default function Header() {
  return (
    <C_Header.Root>
      <MenuMobile />
      <C_Header.Logo
        src={"/logo.png"}
        width={133}
        height={60}
        alt="Logo Biosanté"
      />

      <C_Header.Nav>
        <C_Header.List>
          <C_Header.Item text={"Inicio"} />
          <C_Header.Item text={"Produtos"} />
          <C_Header.Item text={"Prescitos"} />
          <C_Header.Item text={"Sobre"} />
          <C_Header.Item text={"Estudos"} />
        </C_Header.List>
      </C_Header.Nav>
    </C_Header.Root>
  );
}
