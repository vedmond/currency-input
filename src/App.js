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
    let currentlyValue = e.target.value.replace(reg, '');
    const valueArray = currentlyValue.split('');
    if (valueArray[valueArray.length - 1] === '.') {
      for (let i = 0; i < valueArray.length - 1; i++) {
        if (valueArray[i] === '.') {
          valueArray.pop();
          currentlyValue = valueArray.join('');
          setPrice(currentlyValue);
          console.log('valueArray1 =', valueArray);
          return;
        }
      }
    }
    // const indexPoint = valueArray.length - 3;
    if (valueArray.length - 1 > valueArray.indexOf('.') + 2 && valueArray.indexOf('.') !== -1) {
      console.log('valueArray.indexOf =', valueArray.indexOf('.'));
      valueArray.pop();
      console.log('if1');
    }
    currentlyValue = valueArray.join('');
    setPrice(currentlyValue);
    console.log('valueArray2 =', valueArray);
    const numberCent = Number((Number(valueArray.join('')) * 100).toFixed());

    console.log('numberCent =', numberCent);
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
