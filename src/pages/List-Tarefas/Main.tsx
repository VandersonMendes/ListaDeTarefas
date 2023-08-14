import React, { useEffect, useState } from 'react';
import iconUp from '../../assets/iconUp.svg';
import iconEdit from '../../assets/iconEdit.svg';
import iconRemove from '../../assets/icons8-remover.svg';
import './listTarefas.css';
import ModalEdit from './ModalEdit';

const Main: React.FC= () => {
  const [value, setValue] = useState<string>('');
  const [itensArray, setItensArray] = useState<string[]>([]);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [itemSelect, setItemSelect] = useState<string>('');
  const [valueIndex, setValueIndex] = useState<number>(0);
  const [valueEdit, setValueEdit] = useState<string>('');
  const [confirmEdit, setConfirmEdit] = useState<boolean>(false);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('listTarefas') || '[]');
    setItensArray(storedItems);
  }, []);

  useEffect(() =>{
    if(confirmEdit === true){
      const updatedArray = [...itensArray];
      updatedArray[valueIndex] = valueEdit;
      setItensArray(updatedArray);
      localStorage.setItem('listTarefas', JSON.stringify(updatedArray));
    }
    setConfirmEdit(false);
  },[confirmEdit])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!itensArray.includes(value)) {
      const updatedArray = [...itensArray, value];
      setItensArray(updatedArray);
      localStorage.setItem('listTarefas', JSON.stringify(updatedArray));
    }

    setValue('');
  };



  const handleClickRemove = (index: number) => {
    const updatedArray = itensArray.filter((_, i) => i !== index);
    setItensArray(updatedArray);
    localStorage.setItem('listTarefas', JSON.stringify(updatedArray));
  };
  return (
    <main>
      {itensArray && itensArray.map((item, index) => (
        <div> {modalEdit && <ModalEdit setModal={setModalEdit} index={index.toString()}  item={item} confirmEdit={setConfirmEdit} value={itemSelect} modal={modalEdit} valueEdit={setValueEdit}></ModalEdit>}</div>
      ))}

      <div className="container">
        <h1 className="text-white text-3xl md:text-5xl font-black flex justify-center mt-20">
          Lista de tarefas
        </h1>
        <form
          className="text-white text-xl font-bold flex justify-center m-10 formList"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Digite sua tarefa"
            className="text-xl md:text-2xl p-2 "
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="buttonSubmit flex gap-2 items-stretch">
            <img src={iconUp} alt="Button Submit" className='icon' />
          </button>
        </form>
        <form
          className="text-black  font-bold flex flex-col justify-center items-stretch gap-3  md-5 md:m-10 formListEdit"
          onSubmit={(e) => e.preventDefault()}
        >
          {itensArray && itensArray.length > 0 ? (
            itensArray.map((item, index) => (
              <div key={item} className='flex justify-center align-stretch w-full animeLeft'>

                <label className='checkbox'>
                  <input type="checkbox" />
                  <svg viewBox="0 0 64 64" height="35px" width="60px">
                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                  </svg>
                </label>
                <textarea
                  value={item}
                  rows={1}
                  id={index.toString()}
                  className="inputTarefa text-xl md:text-2xl rounded-lg text-white ml-1 ml-2 placeholder:text-xl md:placeholder:text-2xl"
                  onFocus={() =>{
                    setModalEdit(true)
                    setItemSelect(item)
                    setValueIndex(index)
                  } }
                />

                <div className=" ml-2 md:ml-4 flex  gap-1 md:gap-2 items-center align-center">
                  <button className='cursor-pointer p-1 px-3  bg-amber-50 rounded-md' onClick={() =>{ 
                    setModalEdit(true) 
                    setItemSelect(item)
                    } }><img src={iconEdit} alt="IconEdit" className='icon' /></button>

                  <button
                    className="p-1 px-3 bg-red-400 rounded-md "
                    onClick={() => handleClickRemove(index)}
                  >
                    <img src={iconRemove} alt="IconRemove" className='icon' />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-white text-3xl md:text-5xl font-black flex justify-center mt-20 animeLeft">
              Não há tarefas...
            </h1>
          )}
        </form>
      </div>
    </main>
  );
};

export default Main;