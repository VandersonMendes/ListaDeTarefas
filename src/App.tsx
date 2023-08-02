import './App.css'
import Home from "../src/pages/Home/Home"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <div className='text-white'>
      <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path='/'></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
