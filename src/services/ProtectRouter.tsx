import { useAppProvider } from "../Context/Context";
import { Navigate } from 'react-router-dom'
// O protected é usado para toda vez que tentar acessar o usuario pela rota, ele guiara para a rota de login
const ProtectedRoute = ({children}:{children: React.ReactNode}) => {
    const {login} = useAppProvider();
    console.log(login)
    if(login === true){
      return children
    }else if(login === false){
      return <Navigate to="/" />
    }
}

export default ProtectedRoute;