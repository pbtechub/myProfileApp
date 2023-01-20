import React, { useContext } from 'react';
import { GlobalContext } from '../transcontext/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
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

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className='mt-[30x]'>
      <h4 className='text-[.7rem] mt-[10px] font-bold'>Your Balance</h4>
     <h4 className='font-bold text-[.9rem]'>{moneyFormatter(total)}</h4>
    </div>
  )
}

export default Balance;