"use client"

import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react"

export default function CardSom({musica}){
    const[ favorito,setFavorito ] = useState(false) //hooks 

    useEffect( () => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favorito = favoritos.find(m => m.id === musica.id)
        setFavorito(favorito)
    }, [] )

    function favoritar(){
        setFavorito(true)
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        favoritos.push(musica)
        localStorage.setItem( "favoritos", JSON.stringify(favoritos) )
    }

    function desfavoritar(){
        setFavorito(false)
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favoritosAtualizados = favoritos.filter(m => m.id !== musica.id )
        localStorage.setItem( "favoritos", JSON.stringify(favoritosAtualizados) )
    }

    return (
        <div className="flex flex-col gap-1 items-center bg-slate-700 p-4 rounded-lg w-56 m-2 shadow-md">
            <img alt={musica.alb.all.name} src={musica.alb.all.cover} className='rounded-lg line-clamp-1'/>
            <a href={musica.alb.all.url} className='font-normal text-lg w-full text-center line-clamp-1'>{musica.alb.all.name}</a>
            <a href={musica.alb.all.art.url} className='font-light text-lg w-full text-center line-clamp-1'>{musica.alb.all.art.name}</a>
            {favorito ? 
            <HeartIcon 
              className="h-6 w-6 text-[#FF5964]  cursor-pointer"
              onClick={desfavoritar} 
              />
            :
            <HeartIconOutline 
              className="h-6 w-6 text-zinc-100  cursor-pointer hover:text-[#FF5964]" 
              onClick={favoritar} 
              />
        }
        </div>
    )
}