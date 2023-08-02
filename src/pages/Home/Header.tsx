import "./header.css"
const Header = () => {
  return (
    <header className=" border-b-2 shadow-xl">
      <nav className='flex flex-wrap justify-around items-end container py-5 gap-3 xl:gap-4'>
      <h1 className='font-bold text-3xl xl:text-4xl'>Lista de Tarefas </h1>
        <nav>
          <ul className=' listNav flex flex-wrap gap-10 font-bold text-base lg:text-2xl'>
            <li className="p-1"><a href="/">Home</a></li>
            <li className="p-1"><a href="#feeadback">Feeadback</a></li>
          </ul>
        </nav>
      </nav>
    </header>
  )
}

export default Header