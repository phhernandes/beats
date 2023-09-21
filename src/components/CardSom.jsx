"use client"

import { HeartIcon, HeartIconOutline } from "@heroicons/react/outline";
import { useEffect, useState } from "react";


export default function CardSom({ musica }) {
  const [favorito, setFavorito] = useState(false);
  
  useEffect(() => {
    async function checkFavorito() {
      try {
        const response = await fetch(
          `http://localhost:3001/favoritos/${musica.id}`
        );
        if (response.ok) {
          const data = await response.json();
          setFavorito(data !== null);
        } else {
          console.error("Erro ao verificar favorito:", response.status);
        }
      } catch (error) {
        console.error("Erro ao verificar favorito:", error);
      }
    }

    checkFavorito();
  }, [musica.id]);

  async function favoritar() {
    try {
      const response = await fetch("http://localhost:3001/favoritos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(musica),
      });

      if (response.ok) {
        setFavorito(true);
      } else {
        console.error("Erro ao favoritar música:", response.status);
      }
    } catch (error) {
      console.error("Erro ao favoritar música:", error);
    }
  }

  async function desfavoritar() {
    try {
      const response = await fetch(
        `http://localhost:3001/favoritos/${musica.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setFavorito(false);
      } else {
        console.error("Erro ao desfavoritar música:", response.status);
      }
    } catch (error) {
      console.error("Erro ao desfavoritar música:", error);
    }
  }

  return (
    <div className="flex flex-col gap-1 items-center bg-slate-700 p-4 rounded-lg w-56 m-2 shadow-md">

      <img
        alt={musica.all.name}
        src={musica.all.cover}
        className="rounded-lg line-clamp-1"
      />
      <a className="font-normal text-lg w-full text-center line-clamp-1">
        {musica.all.name}
      </a>
      <a className="font-light text-lg w-full text-center line-clamp-1">
        {musica.all.art.name}
      </a>
      {favorito ? (
        <HeartIcon
          className="h-6 w-6 text-[#FF5964]  cursor-pointer"
          onClick={desfavoritar}
        />
      ) : (
        <HeartIconOutline
          className="h-6 w-6 text-zinc-100  cursor-pointer hover:text-[#FF5964]"
          onClick={favoritar}
        />
      )}
    </div>
  );
}


