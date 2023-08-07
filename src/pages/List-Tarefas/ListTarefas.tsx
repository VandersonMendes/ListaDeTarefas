import Main from "../List-Tarefas/Main"
import Header from "../List-Tarefas/Header"
import  "../../assets/css/animation.css"
import { useAppProvider } from '../../Context/Context';
// import from "./listTarefas.css"
const ListTarefas = () => {
  const user = JSON.parse(localStorage.getItem('auth'));
  return (
    <section>
      <Header />
        <Main />

        
    </section>
  )
}

export default ListTarefas