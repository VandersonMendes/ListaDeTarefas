import imgHome from "../../../assets/team checklist-bro.svg"
import "./main.css"
import "../../../assets/css/animation.css"
import Form from "./Form"
// import iconEmail from "../../../assets/email.svg"
// import useForm from '../../../Hooks/validadeForm';
const Main = () => {
    return (
        <main className="container main animeTop" style={{height:'100%'}}>
            {/* Apresentação */}
            <section className='flex justify-around flex-col gap-6  md:flex-row  items-center py-2 m-10'>
                <div className='img animeRight'>
                    <img src={imgHome} alt="imagem da home" className="max-w-sm lg:max-w-lg w-max " />
                </div>
                <Form />
                
            </section>
        
            <section>
            </section>
        </main>
    )
}

export default Main