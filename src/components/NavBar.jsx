"use client"

import { serverLogout } from "@/actions/auth";
import { PlayCircleOutlined, Search } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const { push } = useRouter()

    function logout(){
        serverLogout()
        push("/login")
    }

    return (
        <>
          <nav className="bg-slate-700 text-zinc-100 p-5">
            <ul className="flex flex-row justify-between px-10">
              <li className='flex space-x-0.5'>
              <PlayCircleOutlined className='text-3xl' style={{ color:'#FF5964' }}/>
                <a href="/" className="text-3xl font-bold">FSDB</a>
              </li>
              <li>
                <a href="/favoritos" className='text-2xl font-bold'>Favoritos</a>
              </li>
              <li>
              <div className="flex items-center text-base bg-slate-500 rounded-2xl " >
                  <Search href="#" className="text-4xl pl-3" style={{ color:'#FF5964' }}/>
                  <input
                    type="text"
                    placeholder="Busque"
                    className="bg-transparent text-sm py-1 px-1 font-bold text-decoration-line: none text-slate-300"
                  />
                </div>
              </li>
              <li>
              <button className='text-2xl font-bold' onClick={logout}>Logout</button>
              </li>
            </ul>
          </nav>
        </>
      )
    }