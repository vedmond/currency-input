import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import './App.css';

function App() {
  const entryPrice = 5; // входящее значение в центах

  const inputFieldFormatting = (entryValue) => {
    return entryValue === 0 ? '0.00' : `${(entryValue / 100).toFixed(2).toString()}`;
  };
  const [price, setPrice] = useState(inputFieldFormatting(entryPrice));
  const priceHandler = (e) => {
    const reg = /[^0-9.]/;
    let currentlyValue = e.target.value.replace(reg, '');
    let valueArray = currentlyValue.split('');
    const filterArray = valueArray.filter((elem) => elem === '.');
    if (filterArray.length === 1 && valueArray.length === 1) {
      valueArray = ['0', ...valueArray, '0'];
    }
    if (filterArray.length > 1) {
      valueArray.splice(valueArray.indexOf('.'), 1);
      valueArray.indexOf('.') === valueArray.length - 1
        ? (valueArray = [...valueArray, '0', '0'])
        : (valueArray = [...valueArray]);
    }
    if (valueArray.length - 1 > valueArray.indexOf('.') + 2 && valueArray.indexOf('.') !== -1) {
      valueArray.pop();
    }
    if (valueArray[0] === '0' && valueArray[1] !== '.') {
      valueArray.shift();
    }
    currentlyValue = valueArray.join('');

    setPrice(currentlyValue);
    // const numberCent = Number((Number(valueArray.join('')) * 100).toFixed());
    // исходящее в центах
    return;
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
