"use client"

import { PlayCircleOutlined,Search} from '@mui/icons-material';
import './globals.css';
import corredor from 'next/image';
import Titulo from "@/components/Titulo";
import CardSom from "@/components/CardSom";
import { useEffect, useState } from 'react';

async function carregarDados() {
  try {
    const response = await fetch(
      'https://api.vagalume.com.br/rank.php?type=alb&period=month&periodVal=202308&scope=nacional&limit=1&apikey={c5efc47c2e8e46f1086a5154bdb7af07}'
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    return json.alb.week.all; // Extract the album data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default function Home() {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const albumData = await carregarDados();
      setMusicas(albumData);
    }

    fetchData();
  }, []);

  
  return (
    <>
      <nav className="bg-slate-700 text-zinc-100 p-5">
        <ul className="flex flex-row justify-between px-10">
          <li className='flex space-x-0.5'>
            <PlayCircleOutlined className='text-3xl' style={{ color:'#FF5964' }}/>
            <a href="#" className="text-3xl font-bold">Beats</a>
          </li>
          <li>
            <a href="#" className='text-2xl font-bold'>Favoritos</a>
          </li>
          <li>
          <div className="flex items-center text-base bg-slate-500 rounded-2xl " >
              <Search href="#" className="text-4xl pl-3" style={{ color:'#FF5964' }}/>
              <input
                type="text"
                placeholder="O que você deseja ouvir?"
                className="bg-transparent text-sm py-1 px-1 font-bold text-decoration-line: none text-slate-300"
              />
            </div>
          </li>
          <li>
            <a href="#" className='text-2xl font-bold'>Sobre</a>
          </li>
        </ul>
      </nav>
      
      {/*fileira lançamentos*/}
      
      <Titulo>Lançamentos</Titulo>
      
      <section className="flex flex-wrap px-40 justify-between text-zinc-100">
      {musicas.map((musica) => (
          <CardSom key={musica.id} musica={musica} />
        ))}
      </section>    
      
      <Titulo>Álbuns Populares</Titulo>
    </>    
  )
}