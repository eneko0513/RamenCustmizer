import React, { useState } from 'react';
import './App.css';

const options = {
  noodle: ['やわめ', 'ふつう', '硬め'],
  flavor: ['薄め', '普通', '濃いめ'],
  oil: ['少なめ', '普通', '多め'],
};

function App() {
  const [result, setResult] = useState('');

  const getRandomOption = (options) => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const generateRandomRamen = () => {
    const randomNoodle = getRandomOption(options.noodle);
    const randomFlavor = getRandomOption(options.flavor);
    const randomOil = getRandomOption(options.oil);

    setResult(`麺の硬さ：${randomNoodle}、味の濃さ：${randomFlavor}、油の量：${randomOil}`);
  };

  return (
    <div className="App">
      <h1>ラーメンカスタマイザー</h1>
      <button onClick={generateRandomRamen}>ランダムにラーメンを生成</button>
      {result && <p className="result-text">{result}</p>}
    </div>
  );
}

export default App;