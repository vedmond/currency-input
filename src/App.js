import * as React from 'react';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';

import { useState } from 'react';

import './App.css';

function App() {
  const entryPrice = 5;

  const inputFieldFormatting = (entryValue) => {
    return entryValue === 0 ? '0.00' : `${(entryValue / 100).toFixed(2).toString()}`;
  };
  const [price, setPrice] = useState(inputFieldFormatting(entryPrice));
  const priceHandler = (e) => {
    const reg = /[^0-9.]/;

    // let currentlyValue = (Number(e.target.value.replace(reg, '')) / 100).toFixed(2);
    let currentlyValue = e.target.value.replace(reg, '');
    const valueArray = currentlyValue.split('');
    if (valueArray[valueArray.length - 1] === '.') {
      for (let i = 0; i < valueArray.length - 1; i++) {
        if (valueArray[i] === '.') {
          valueArray.pop();
          return;
        }
      }
    }
    if (valueArray.indexOf('.', -3) === -1 && valueArray.length > 3) {
      valueArray.pop();
      console.log('if1');
    }
    currentlyValue = valueArray.join('');
    setPrice(currentlyValue);
    console.log('valueArray1 =', valueArray);
    // if (valueArray.indexOf('.', -3) === -1) {
    //   console.log('true');
    //   valueArray.pop();
    //   console.log('if1');
    //   setPrice(valueArray.join(''));
    // }
    // if (valueArray.indexOf('.', -1) !== -1) {
    //   console.log('true');
    //   console.log('valueArray.length', valueArray.length);
    //   const valueArray2 = [...valueArray, '0', '0'];
    //   console.log('if2');
    //   setPrice(valueArray2.join(''));
    // }
    // if (valueArray[valueArray.length - 1] === '.' && valueArray.includes('.')) {
    //   valueArray.pop();
    //   console.log('valueArray2 = ', valueArray);
    //   console.log('if3');
    //   setPrice(valueArray.join(''));
    // }
    console.log('valueArray2 =', valueArray);
    const numberCent = Number((Number(valueArray.join('')) * 100).toFixed());
    // const item = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    //   number,
    // );
    console.log('numberCent =', numberCent);
    // console.log('item =', item);
    // setPrice(item);

    // // const number = e.target.value;
    // console.log('number =', number);
    // console.log('price =', price);
    // const item = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    //   number,
    // );
    // console.log(item);

    // const valueArray = e.target.value.replace(reg, '').split('');
    // if (valueArray.length === 1) {
    //   valueArray.splice(-1, 0, '0', '.');
    //   console.log(valueArray.join(''));
    //   currentlyValue = valueArray.join('');
    // }
    // console.log('valueArray.length = ', valueArray.length);
    // if (valueArray.length === 1) {
    //   valueArray.splice(1, 0, '0', '0', '.');
    //   console.log(valueArray.join(''));
    //   currentlyValue = valueArray.join('');
    // }
    // if (valueArray.length === 1) {
    //   valueArray.splice(1, 0, '0', '0', '.');
    //   console.log(valueArray.join(''));
    //   currentlyValue = valueArray.join('');
    // }

    // if (valueArray.length > 1) {
    //   valueArray.splice(-2, 0, '.');
    //   console.log(valueArray.join(''));
    //   currentlyValue = valueArray.join('');
    // }
    // if (currentlyValue.length < 5) {

    // }
  };
  return (
    <div className="App">
      <TextField
        onChange={(e) => priceHandler(e)}
        value={price}
        type="text"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </div>
  );
}

export default App;
