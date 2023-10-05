import { PlayCircleOutlined,Search} from '@mui/icons-material';
import './globals.css';
import Titulo from "@/components/Titulo";
import CardSom from "@/components/CardSom";
import NavBar from '@/components/NavBar';

async function carregarDados(){
  const url = "https://api.vagalume.com.br/rank.php?type=alb&period=month&scope=internacional&limit=20&apikey={c5efc47c2e8e46f1086a5154bdb7af07}"
  const response = await fetch(url)
  const json = await response.json()
  console.log(json);
  return json
}

export default async function Home() {

const musicas = await carregarDados()
  
  return (
    <>
      <NavBar/>
      
      <Titulo>Álbuns Populares</Titulo>
      
      <section className="flex flex-wrap px-40 justify-between text-zinc-100">
       <CardSom musica={musicas} />
      </section>    
    </>    
  )
}