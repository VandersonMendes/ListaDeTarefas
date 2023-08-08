import React, { useState } from 'react';
import User from "../../assets/user-128.svg";
import { useNavigate } from 'react-router';
import "../List-Tarefas/listTarefas.css";
interface typeUser {
  email: string;
  emailVerified: boolean;
  photoURL: string;
  displayName: string;
}
const Header = () => {
  const [user, setUser] = useState<typeUser>(JSON.parse(localStorage.getItem('auth')!));
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleAddCount = () =>{
    navigate('/');
    confirm('Você perderá sua lista de tarefas');
  }
  return (
    <header className=" border-b-2 shadow-xl">
      <nav className='flex flex-wrap justify-around items-center container py-5 gap-3 xl:gap-4' >
        <h1 className='font-bold  text-2xl md:text-3xl xl:text-4xl'>Lista de Tarefas </h1>
        <nav className=''>
          <a className=' relative flex items-center gap-3 border-2 p-1  px-3 md:px-6 rounded-xl cursor-pointer max-[450px]:p-1' onClick={() => setModal(!modal)}>
            <img src={user.photoURL ? user.photoURL : User} alt="Usuario imagem" className=' w-7 md:w-8 rounded-full ' />
            <h2 className=' text-base md:text-xl nameUser'>{user.displayName ? user.displayName : user.user.email}</h2>
          </a>
          {modal &&
            <div className="modalUser absolute  right-50 max-[600px]:right-50 top-20 bg-black animeTop p-10 max-[768px]:p-5  ease-in flex flex-col items-center gap-4 rounded-b-xl  " style={{ backgroundColor: '#0013357c' }}>
              <button className="absolute left-5 top-5 text-2xl bg-red-600 px-2 " onClick={() => setModal(false)}>X</button>
              <div className='flex items-center flex-col'>
                <img src={user.photoURL ? user.photoURL : User} alt="Usuario imagem" className=' w-20 md:w-15 rounded-full  border-4' />
                <h3 className='text-sm md:text-base '>{user.email ? user.email : user.user.email}</h3>
              </div>
              <h2 className='text-base md:text-2xl '>{user.displayName ? user.displayName : user.user.email}</h2>
              <button className='text-base md:text-xl text-red-700 font-black bg-white px-3 rounded-xl' onClick={handleAddCount}><span>Adicione Outra conta</span></button>
            </div>
          }
        </nav>
      </nav>
    </header>
  )
}

export default Header