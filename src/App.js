import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [linea1,setlinea1] = useState('');
  const [linea2,setlinea2] = useState('');
  const [img,setImagen] = useState('');

  const onChangeLinea1 = function(valor) {
    setlinea1(valor.target.value);
  }

  const onChangeLinea2 = function(valor) {
    setlinea2(valor.target.value);
  }

  const onChangeimagen = function(valor) {
    setImagen(valor.target.value);
  }

  const onClickExportar = function() {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App" id='meme'>
      <select onChange={onChangeimagen}>
        <option value="fire">casa en llamas</option>
        <option value="futurama">futurama</option>
        <option value="history">History chanel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">philosofoRaptor</option>
        <option value="smart">Smath guy</option>
      </select><br/>
        <input onChange={onChangeLinea1} placeholder="linea 1" type="text"/><br/>
        <input onChange={onChangeLinea2} placeholder="linea 2" type="text"/><br/>
        <button onClick={onClickExportar}>exportar</button>

        <div className='meme'>
          <span>{linea1}</span> <br/>
          <span>{linea2}</span>
          <img src={"/images/"+img+".png"} width="100%"/>
        </div>

    </div>
  );
}

export default App;
