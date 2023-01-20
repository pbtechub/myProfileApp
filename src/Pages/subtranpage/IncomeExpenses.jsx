import React, { useContext } from 'react';
import { GlobalContext } from '../transcontext/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="bg-[#fff] shadow-md flex justify-between mt-[10px] px-[20px] py-[10px]">
        <div>
          <h4 className='text-[.7rem] font-medium'>Income</h4>
  <p className="font-bold text-[.8rem]">{moneyFormatter(income)}</p>
        </div>
        <div>
          <h4 className='text-[.7rem] font-medium'>Expense</h4>
  <p className="font-bold text-[.8rem]">{moneyFormatter(expense)}</p>
        </div>
      </div>
  )
}