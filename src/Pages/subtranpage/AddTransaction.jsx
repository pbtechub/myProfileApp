import React, {useState, useContext} from 'react'
import { GlobalContext } from '../transcontext/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    
  }

  return (
    <div className='mt-[30px]'>
        <h3 className='font-medium text-[.8rem]'>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="flex flex-col">
            <label htmlFor="text" className='inline-block my-[5px] text-[.7rem]'>Text</label>
            <input className='outline-none rounded-sm block p-[5px] w-[100%] text-[.7rem]' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
        <div className="flex flex-col">
            <label htmlFor="amount" className='inline-block my-[10px] text-[.7rem]'
                >Amount <br />
                <span className='text-[.6rem]'>(negative - expense, positive - income)</span></label>
            
            <input className='outline-none rounded-sm block p-[5px] w-[100%] text-[.7rem]' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="pointer bg-[#9c88ff] shadow-md text-[#fff] border-0 block text-[.8rem] p-[8px] w-[100%] mt-[20px]">Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction