import React from 'react';
import { Header } from './subtranpage/Header';
import { Balance } from './subtranpage/Balance';
import { IncomeExpenses } from './subtranpage/IncomeExpenses';
import { TransactionList } from './subtranpage/TransactionList';
import AddTransaction from './subtranpage/AddTransaction';

import { GlobalProvider } from './transcontext/GlobalState';



function Transactions() {
  return (
    <GlobalProvider>
      <div className='grid grid-cols-2 gap-[40px]'>
        <div>
          <Header />
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div>
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default Transactions;