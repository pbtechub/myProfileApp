import React, { useContext } from 'react';
import { Transaction } from '../subtranpage/Transaction';

import { GlobalContext } from '../transcontext/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h5 className='font-[500] text-[grey] text-[.9rem]'>Transactions History</h5>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}