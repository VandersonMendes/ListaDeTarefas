import imgHome from "../../assets/team checklist-bro.svg"
import "./main.css"
import "../../assets/css/animation.css"
import iconGoogle from "../../assets/1534129544.svg"
import iconEmail from "../../assets/email.svg"
import { useState } from "react"
const Main = () => {
    const [singUp, setSingUp] = useState(true);
    const [signIn, setSingIn] = useState(false);
    return (
        <main className="container">
            {/* Apresentação */}
            <section className='flex justify-around  items-center py-2'>
                <div className='img'>
                    <img src={imgHome} alt="imagem da home" className="max-w-xl" />
                </div>

                <div className="form p-10 rounded-3xl">
                    <div className="flex justify-center text-2xl font-semibold text-black">
                        <button className={`bg-green-500 p-1 rounded-l-full px-8 ${signIn ? 'bg-white' :'bg-grenn-500' } transition ease-linear delay-100 l `} onClick={() => {
                            setSingUp(true)
                            setSingIn(false)
                        }}>Inscreva-se</button>
                        <button className={` p-1 rounded-r-full px-8 ${signIn ? 'bg-green-500' :'bg-white' } transition ease-linear delay-100 `} onClick={() => {
                            setSingUp(false)
                            setSingIn(true)
                        }}>Entrar</button>
                    </div>
                        {singUp &&
                           <div className="animeTop">
                           <div className="flex justify-center" >
                               <button className="flex gap-4 my-7  items-center text-2xl rounded-full cursor-pointer p-1 px-10 " style={{ background: '#30394A' }}>
                                   <h3 className="font-mediun">Inscreva-se</h3><img src={iconGoogle} className="w-7" alt="icone google" />
                               </button>
                           </div>
                           <form className="flex flex-col gap-6 text-lg font-bold">
                               <input type="text" placeholder="Nome" className="text-black" />
                               <input type="email" placeholder="Email" className="text-black" />
                               <input type="password" placeholder="Senha" className="text-black" />
                           </form>
                           <div className="flex justify-center" >
                               <button className="flex gap-4 my-7  items-center text-2xl rounded-full cursor-pointer  p-2 px-8 " style={{ background: '#097d26' }}>
                                   <h3 className="font-bold">Se inscrever</h3>
                               </button>
                           </div>
                       </div>}
                       {signIn &&
                          <div className="animeRight">
                          <div className="flex justify-center" >
                              <button className="flex gap-4 my-7  items-center text-2xl rounded-full cursor-pointer p-1 px-10 " style={{ background: '#30394A' }}>
                                  <h3 className="font-mediun">Entrar</h3><img src={iconGoogle} className="w-7" alt="icone google" />
                              </button>
                          </div>
                          <form className="flex flex-col gap-6 ">
                              <input type="email" placeholder="Email" className="text-black" />
                              <input type="password" placeholder="Senha" className="text-black" />
                          </form>
                          <div className="flex justify-center" >
                              <button className="flex gap-4 my-7  items-center text-2xl rounded-full cursor-pointer  p-2 px-8 " style={{ background: '#097d26' }}>
                                  <h3 className="font-bold">Entrar</h3>
                              </button>
                          </div>
                      </div>
                       }
                 
                </div>
            </section>
            {/* Feaadback */}
            <section>
            </section>
        </main>
    )
}

export default Main