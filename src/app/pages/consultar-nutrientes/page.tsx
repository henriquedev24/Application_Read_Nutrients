import ConsultarNutrientes from "../consultar-nutrientes/page";
import { NavBar } from "../../components/NavBar";
import { ButtomLerCodigo } from "../../components/Buttomlercodigo";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
    <header className="flex justify-center items-center p-4">
      <NavBar />
    </header>
    <main className="flex flex-col justify-center items-center py-0 my-52">
        <ConsultarNutrientes />
      
      <ButtomLerCodigo />
      </main>
      </div>
  )
}
