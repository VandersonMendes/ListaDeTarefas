import React, { MouseEventHandler, useState } from 'react';
import './ModalEdit.css';

interface PropsType {
  setModal: (value: boolean) => void;
  value: string;
  modal: boolean;
  valueEdit: (value: string) => void;
  confirmEdit: (value : boolean) => void;
}

const ModalEdit: React.FC<PropsType> = ({ setModal, value, modal, valueEdit, confirmEdit }) => {
  const [valueChange, setValueChange] = useState<string>(''); // Initialize with an empty string
  const handleModal: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    valueEdit(valueChange); 
    confirmEdit(true);
    if(valueChange.length < 0){
      confirmEdit(false)
    }
    setModal(false);
  };

  return (
    <div className={`modalContainer animeTop ${modal ? 'animeTop' : 'animeTopOut'}`} onClick={handleModal}>
      <div className='modal container flex justify-center'>
        <div className='flex flex-col card p-9 md:p-12 rounded-xl'>
          <h1 className='text-white text-center text-2xl md:text-4xl mb-5 font-bold'>Altere sua tarefa</h1>
          <form>
            <textarea
              rows={1}
              defaultValue={value} 
              required
              className='pl-2 p-1 font-bold border-green-500 text-base md:text-2xl placeholder:text-slate-400 placeholder:pl-5 inputEdit'
              placeholder='altere sua tarefa'
              onChange={({ target }) => setValueChange(target.value)}
            />
            <div className='flex justify-end gap-4 mt-6 text-xl md:text-2xl rounded-lg font-bold '>
              <button className='bg-red-800 p-1 px-3 text-white' onClick={() => {
                setModal(false) 
                confirmEdit(false)
                }}>Cancelar</button>
              <button className='bg-blue-200 p-1 px-3 text-black' onClick={handleSubmit}>Ok</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
