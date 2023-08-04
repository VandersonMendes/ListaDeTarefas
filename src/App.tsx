import './App.css'
import Home from "../src/pages/Home/Home"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context/Context';
import ProtectRouter from "./services/ProtectRouter";
import PageNoutFound from './services/PageNoutFound';
import ListTarefas from './pages/List-Tarefas/ListTarefas';
function App() {

  return (
    <div className='text-white'>
      <BrowserRouter>
          <AppProvider>
            <Routes>
              <Route element={<Home/>} path='/'></Route>
              <Route path='/listTarefas'
            element={
            <ProtectRouter>
              <ListTarefas />
            </ProtectRouter>
          } />
              <Route element={<PageNoutFound/>} path='*'></Route>
            </Routes>
          </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
