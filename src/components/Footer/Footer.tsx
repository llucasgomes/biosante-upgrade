import { poppins } from "@/app/ui/fonts";
import { Facebook, Instagram, MailCheck, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import { C_Footer } from ".";

export default function Footer() {
  return (
    <C_Footer.Root style={"bg-red-100"}>
      <div className="w-15 h-full flex flex-col justify-center items-start pt-9">
        <C_Footer.Title text={"FALE CONOSCO"} />
        <p className={`${poppins.className} mt-2`}>Canais de Atendimento</p>
        <C_Footer.Nav style={"mt-2"}>
          <C_Footer.List>
            <C_Footer.Item context="contato@biosante.com.br">
              <C_Footer.Icon icon={MailCheck} />
            </C_Footer.Item>
            <C_Footer.Item context="Sac: (11) 4210-3585">
              <C_Footer.Icon icon={Phone} />
            </C_Footer.Item>
          </C_Footer.List>
        </C_Footer.Nav>

        <C_Footer.Title text={"Redes Sociais"} style="mt-2" />
        <div className="flex gap-6 py-3">
          <C_Footer.Icon
            icon={Instagram}
            size={35}
            color={"#372428"}
            style={"hover:cursor-pointer"}
          />
          <C_Footer.Icon
            icon={Youtube}
            size={35}
            color={"#372428"}
            style={"hover:cursor-pointer"}
          />
          <C_Footer.Icon
            icon={Facebook}
            size={35}
            color={"#372428"}
            style={"hover:cursor-pointer"}
          />
        </div>
      </div>
      {/*   <C_Footer.Content>
        <Image src={"/logo.svg"} width={150} height={150} alt="Logo" />
        <div className="flex gap-4">
          <Instagram
            size={35}
            color="#372428"
            className="hover:cursor-pointer"
          />
          <Youtube size={35} color="#372428" className="hover:cursor-pointer" />
          <Facebook
            size={35}
            color="#372428"
            className="hover:cursor-pointer"
          />
        </div>
      </C_Footer.Content> */}

      <div className="w-15 h-full flex flex-col justify-center items-center ">
        <nav>
          <h2
            className={`${poppins.className} font-bold text-xl text-[#372428]`}
          >
            Informações
          </h2>
          <ul>
            <li className="block pl-4">Biosante Prime</li>
            <li className="block pl-4">Comprar Produtos</li>
            <li className="block pl-4">Estudos Cientificos</li>
            <li className="block pl-4">Cadastro Prescritores</li>
          </ul>
        </nav>
      </div>

      <div className="w-15 h-full flex flex-col justify-center items-center pt-9">
        <nav>
          <h2
            className={`${poppins.className} font-bold text-xl text-[#372428]`}
          >
            IPrecisa de AJuda?
          </h2>
          <ul>
            <li className="block pl-4">Rastreio de Pedido</li>
            <li className="block pl-4">Contato</li>
            <li className="block pl-4">Formas de Pagamento</li>
            <li className="block pl-4">Trocas e Devoluções</li>
            <li className="block pl-4">Livros Digitais</li>
            <li className="block pl-4">Blog Biosanté</li>
          </ul>
        </nav>
      </div>
    </C_Footer.Root>
  );
}
