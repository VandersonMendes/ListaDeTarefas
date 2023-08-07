import { useEffect, useState } from 'react'
import iconUp from "../../assets/iconUp.svg"
import "../List-Tarefas/listTarefas.css"
import iconEdit from "../../assets/iconEdit.svg"
import iconRemove from "../../assets/icons8-remover.svg"
const Main = () => {
  const [value, setValue] = useState<string>()
  const [arrayList, setArrayList] = useState([]);
  const[itensArray, setItensArray] = useState()
  console.log(itensArray)
  useEffect(() =>{
    setItensArray(JSON.parse(localStorage.getItem('listTarefas')));
  },[])
  const handleSubmit = (e: Event) =>{
    e.preventDefault();
    if(itensArray.length < 0){
      setArrayList(itensArray)
    }
    if(value && !arrayList.includes(value)){
      value && arrayList.push(value);
      localStorage.setItem('listTarefas', JSON.stringify(arrayList))
    }
    setItensArray(JSON.parse(localStorage.getItem('listTarefas')))
  }


  // const handleChangeEdit = (item: string, index:number) =>{
  //   const newValor = (arrayList[index].toString() + item)
  //   console.log(newValor.includes(arrayList[index]))
  //   if(item && !arrayList[index].includes(newValor)){
  //     item && arrayList[index].push(newValor);
  //     localStorage.setItem('listTarefas', JSON.stringify(arrayList[index]));
  //   }
  //   setItensArray(JSON.parse(localStorage.getItem('listTarefas')))
  // }
  return (
    <main className='container'>
         <h1 className='text-white text-3xl md:text-5xl font-black flex justify-center mt-20'>Lista de tarefas</h1>
        <form className='text-white text-xl font-bold flex justify-center m-10 formList' onSubmit={(e) =>handleSubmit(e)}>
        <input type="text" placeholder='Digite sua tarefa' className=' text-2xl p-2' onChange={({target}) => setValue(target.value)} /> 
        <button className='buttonSubmit flex gap-2'><img src={iconUp} alt="Button Submit" /></button>
        </form>
        <form className='text-black text-xl font-bold flex flex-col justify-center align-center gap-3 m-10 formListEdit'>
          {itensArray&& itensArray.map((item:string, index:number) =>(
             <div key={item} className='flex justify-center w-full'>
                <input type="checkbox" className='checkbox'/>
               <textarea rows='1' type="text" defaultValue={item} className='inputTarefa text-2xl rounded-lg text-white p-1' id={index} onChange={(event) =>handleChangeEdit(event.target.value, index)} ></textarea>
               <div className='ml-4 flex gap-2 items-center' >
               <label htmlFor={index} className='cursor-pointer p-2 bg-amber-50 rounded-md'><img src={iconEdit} alt="IconEdit"/></label>
                 <button className='p-2 bg-red-400 rounded-md'><img src={iconRemove} alt="IconRemove" /></button>
               </div>
             </div>
          ))}
        </form>
    </main>
  )
}

export default Main