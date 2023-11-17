import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";

export default function MenuMobile() {
  return (
    <Menubar className="bg-transparent border-none p-0 m-0 md:hidden lg:hidden">
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]:bg-transparent focus:bg-transparent">
          <Menu />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Inicio</MenubarItem>
          <MenubarItem>Produtos</MenubarItem>
          <MenubarItem>Prescitos</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Sobre</MenubarItem>
          <MenubarItem>Estudos</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
