import React, { useEffect, useState } from 'react';
import iconUp from '../../assets/iconUp.svg';
import iconEdit from '../../assets/iconEdit.svg';
import iconRemove from '../../assets/icons8-remover.svg';
import iconSave from '../../assets/save-regular.svg'
import './listTarefas.css';

const Main = () => {
  const [value, setValue] = useState<string>('');
  const [itensArray, setItensArray] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [editedValue, setEditedValue] = useState<string>('');

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('listTarefas') || '[]');
    setItensArray(storedItems);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!itensArray.includes(value)) {
      const updatedArray = [...itensArray, value];
      setItensArray(updatedArray);
      localStorage.setItem('listTarefas', JSON.stringify(updatedArray));
    }

    setValue('');
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditedValue(itensArray[index]);
    localStorage.setItem('listTarefas', JSON.stringify(editedValue));
  };

  const handleEditSave = (newValue: string, index: number) => {
    const updatedArray = [...itensArray];
    updatedArray[index] = newValue;
    setItensArray(updatedArray);
    localStorage.setItem('listTarefas', JSON.stringify(updatedArray));
    setEditingIndex(-1);
  };

  const handleClickRemove = (index: number) => {
    const updatedArray = itensArray.filter((_, i) => i !== index);
    setItensArray(updatedArray);
    localStorage.setItem('listTarefas', JSON.stringify(updatedArray));
  };

  return (
    <main className="container">
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
          className="text-2xl p-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="buttonSubmit flex gap-2">
          <img src={iconUp} alt="Button Submit" />
        </button>
      </form>
      <form
        className="text-black text-xl font-bold flex flex-col justify-center align-center gap-3 m-10 formListEdit"
        onSubmit={(e) => e.preventDefault()}
      >
        {itensArray.length > 0 ? (
          itensArray.map((item, index) => (
            <div key={item} className='flex justify-center align-stretch w-full animeLeft'>
              <label className='checkbox'>
                <input type="checkbox" />
                  <svg viewBox="0 0 64 64" height="35px" width="60px">
                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                  </svg>
              </label>
              {editingIndex === index ? (
                <textarea
                  value={editedValue}
                  rows={1}
                  id={index.toString()}
                  className="inputTarefa text-xl md:text-2xl rounded-lg text-white py-0.5 ml-2"
                  onChange={(event) => setEditedValue(event.target.value)}
                />
              ) : (
                <div className='cursor-pointer tarefas t text-xl md:text-2xl rounded-lg text-white py-0.5 ml-2'>{item}</div>
              )}
              <div className="ml-4 flex gap-2 items-center align-center">
                {editingIndex === index ? (
                  <button className='cursor-pointer p-2 bg-amber-50 rounded-md'><img src={iconSave} alt="IconEdit" className='icon' /></button>
                ) : (
                  <label
                    htmlFor={index.toString()}
                    className="cursor-pointer p-2 bg-amber-50 rounded-md"
                    onClick={() => editingIndex === index ? handleEditSave(editedValue, index) : handleEditClick(index)}
                  >
                    <img src={iconEdit} alt="IconEdit" className='icon'/>
                  </label>
                )}
                <button
                  className="p-2 bg-red-400 rounded-md"
                  onClick={() => handleClickRemove(index)}
                >
                  <img src={iconRemove} alt="IconRemove" />
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
    </main>
  );
};

export default Main;
