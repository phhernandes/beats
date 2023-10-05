import { PlayCircleOutlined,Search} from '@mui/icons-material';
import '@/app/globals.css';
import Titulo from "@/components/Titulo";
import CardSom from "@/components/CardSom";
import NavBar from '@/components/NavBar';

async function carregarDados(){
  const url = "http://localhost:3011/favoritos"
  const response = await fetch(url)
  const json = await response.json()
  console.log(json);
  return json
}

export default async function Favoritos() {

const musicas = await carregarDados()
  
  return (
    <>
      <NavBar/>
      
      {/*fileira lançamentos*/}
      
      <Titulo>Favoritos</Titulo>
      
      <section className="flex flex-wrap px-40 justify-between text-zinc-100">
       <CardSom favoritos={musicas} />
      </section>
    </>    
  )
}