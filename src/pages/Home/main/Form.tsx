import iconGoogle from "../../../assets/1534129544.svg"
import React,{ useState } from 'react'
import { useAppProvider } from "../../../Context/Context";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebaseConfig";
import { useNavigate } from "react-router";
interface FormState {
    name: string;
    email: string;
    password: string;
    isLogin: boolean;
}
interface errorState {
    message: string;
    type: boolean
}
const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
    },
    password: {
        regex:  /^.{8,}$/,
        message:
            'A senha precisa ter 8 caracteres.',
    }
};
const Form = () => {
    const [singUp, setSingUp] = useState<boolean>(true);
    const [signIn, setSingIn] = useState<boolean>(false);
    const navigate = useNavigate();
    const [type, setType] = useState <string>();
    const [error, setError] = useState<errorState>({
        message: '',
        type: false
    })
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        password: '',
        isLogin: false
    });
    const validation = () => {
        if (types.email && !types.email.regex.test(formState.email)) {
            setError({
                ...error,
                message: types.email.message,
                type: true
            });
        } else if (types.password && !types.password.regex.test(formState.password)) {
            setError({
                ...error,
                message: types.password.message,
                type: true
            });
        }
    }

    const hadleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formState.email.length === 0 || formState.password.length === 0) {
            setError({
                ...error,
                message: 'Preencha os campos corretamente',
                type: true

            })
        } else {
            setError({
                ...error,
                type: false
            })
        }
        if(type === 'singUp'){
            createUserWithEmailAndPassword(auth, formState.email, formState.password).then((resp) =>{
                navigate('/listTarefas');
                localStorage.setItem('auth', JSON.stringify(resp))
                setLogin(true)
            }).catch(() =>{
                setError({
                    ...error,
                    type:true,
                    message:'Login invalido'
                })

            })
        }else if(type === 'singIn'){
            signInWithEmailAndPassword(auth, formState.email, formState.password).then((resp) =>{
                navigate('/listTarefas');
                localStorage.setItem('auth', JSON.stringify(resp))
                setLogin(true);
            }).catch(() =>{
                setError({
                    ...error,
                    type:true,
                    message:'Login invalido'
                })
            })
        }else{
            setError({
                ...error,
                type:false,
            })
        }
    }
    const handleChange = () => {
        validation();
    }

    const {signInGoogle, setLogin} = useAppProvider();
    console.log(setLogin)

    return (
        <div className="form p-6 lg:p-10 rounded-3xl">
            <div className="flex  justify-center text-1xl lg:text-2xl font-semibold text-black max-[400px]:text-sm">
                <button className={`bg-green-500 p-1 rounded-l-full px-8 ${signIn ? 'bg-white' : 'bg-grenn-500 '} transition ease-linear delay-100`} onClick={() => {
                    setSingUp(true);
                    setSingIn(false);
                    setError({
                        ...error,
                        type: false
                    })
                    setType('singUp')
                }}>Registrar</button>
                <button className={` p-1 rounded-r-full px-8 ${signIn ? 'bg-green-500' : 'bg-white'} transition ease-linear delay-100`} onClick={() => {
                    setSingUp(false)
                    setSingIn(true)
                    setType('singIn')
                    setError({
                        ...error,
                        type: false
                    })
                }}>Entrar</button>
            </div>
            {singUp &&
                <div className="animeTop" >
                    <div className="flex justify-center" >
                        <button className="flex gap-4 my-7  items-center  text-base lg:text-2xl rounded-full  cursor-pointer p-1 px-10 " onClick={signInGoogle} style={{ background: '#30394A' }} >
                            <h3 className="font-mediun">Entrar</h3><img src={iconGoogle} className="w-7 max-[600px]:w-5" alt="icone google" />
                        </button>
                    </div>
                    <form className="flex flex-col gap-2 text-base md:font-lg font-bold formulario" onSubmit={hadleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input autoComplete="off" type="email" placeholder="Ex: MariaGomes@gmail.com" className="text-black text-lg  md:text-xl" onChange={(event) => {
                            handleChange()
                            setFormState({
                                ...formState,
                                email: event.currentTarget?.value || ''
                            })
                        }} />
                        <label htmlFor="senha">Senha</label>
                        <input  autoComplete="off" type="password" placeholder="Digite uma senha forte!" id="senha" className="text-black  text-lg  md:text-xl" onChange={(event) => {
                            handleChange()
                            setFormState({
                                ...formState,
                                password: event.currentTarget?.value || ''
                            })
                        }} />
                        <div className="flex justify-center" >
                            <button className=" my-7  items-center text-2xl rounded-full cursor-pointer  p-2 px-8 max-[600px]:text-xl" style={{ background: '#1DCC48' }}>
                                <h3 className="font-bold">Se inscrever</h3>
                            </button>
                        </div>
                    </form>

                </div>}
            {signIn &&
                <div className="animeRight">
                         <div className="flex justify-center" >
                        <button className="flex gap-4 my-7  items-center  text-base lg:text-2xl rounded-full  cursor-pointer p-1 px-10 " onClick={signInGoogle} style={{ background: '#30394A' }} >
                            <h3 className="font-mediun">Entrar</h3><img src={iconGoogle} className="w-7 max-[600px]:w-5" alt="icone google" />
                        </button>
                    </div>
                    <form className="flex flex-col gap-6 formulario " onSubmit={hadleSubmit}>
                        <input type="email" placeholder="Email" className="text-black text-lg  md:text-xl" onChange={(event) => {
                            handleChange()
                            setFormState({
                                ...formState,
                                email: event.currentTarget?.value || ''
                            })
                        }} />
                        <input type="password" placeholder="Senha" className="text-black  text-lg  md:text-xl placeholder:text-lg" onChange={(event) => {
                            handleChange()
                            setFormState({
                                ...formState,
                                password: event.currentTarget?.value || ''
                            })
                        }} />
                        {type ? (
                            <button className="my-7  items-center text-2xl rounded-full cursor-pointer  p-2 px-8 max-[600px]:text-xl" style={{ background: '#1DCC48' }}>
                            <h3 className="font-bold">Se inscrever</h3>
                        </button>
                        ): (
                            <button disabled className="my-7  items-center text-2xl rounded-full cursor-pointer  p-2 px-8 max-[600px]:text-xl" style={{ background: '#1DCC48' }}>
                            <h3 className="font-bold">Se inscrever</h3>
                        </button>
                        )}
                    </form>
                </div>
            }
            {error.type &&
                <div className="flex justify-center animeRight err">
                    <h3 className="font-bold text-2xl max-[600px]:text-xl text-red-700 bg-white p-4 rounded-full bg-red-300">{error.message}</h3>
                </div>}
        </div>
    )
}

export default Form