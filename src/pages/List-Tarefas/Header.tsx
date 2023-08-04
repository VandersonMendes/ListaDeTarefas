import React, { useState } from 'react';
import User from "../../assets/user-128.svg";
import { useAppProvider } from '../../Context/Context';
import { useNavigate } from 'react-router';
import "../List-Tarefas/listTarefas.css"
const Header = () => {
    const user:object = JSON.parse(localStorage.getItem('auth'));
    const {setModal, modal} = useAppProvider();
    console.log(modal)
    const navigate = useNavigate()
  return (
    <header className=" border-b-2 shadow-xl">
      <nav className='flex flex-wrap justify-around items-center container py-5 gap-3 xl:gap-4'>
      <h1 className='font-bold  text-2xl md:text-3xl xl:text-4xl'>Lista de Tarefas </h1>
        <nav className=''>
            <a className=' relative flex items-center gap-3 border-2 p-1  px-3 md:px-6 rounded-3xl cursor-pointer max-[450px]:p-1' onClick={() => setModal(!modal)}>
                <img src={user ? user.photoURL: User} alt="Usuario imagem" className=' w-9 md:w-10 rounded-full ' />
                <h2 className=' text-base md:text-xl nameUser'>{user.displayName ? user.displayName : user.user.email}</h2>
            </a>
            {modal && 
        <div className="modalUser absolute right-21 bg-black animeTop p-12 max-[768px]:p-5 max-[450px]:right-1 ease-in flex flex-col items-center gap-5 rounded-b-xl rounded-t-xl">
          <button className="absolute left-3 top-2 text-2xl bg-red-600 px-2" onClick={() => setModal(false)}>X</button>
             <img src={user ? user.photoURL: User} alt="Usuario imagem" className=' w-20 md:w-15 rounded-full  border-4' />
              <h2 className='text-xl '>{user.displayName ? user.displayName : user.user.email}</h2>
              <button className='text-xl ' onClick={() =>navigate('/') }>Adicione Outra conta</button>
        </div>
        }
        </nav>
      </nav>
    </header>
  )
}

export default Header