import './App.css';
import { useState } from 'react';
import Boton from './componentes/Boton';
import Puntaje from './componentes/Puntaje';

function App() {

  const [puntos,setPuntos] = useState(0);

  const sumarPuntos5 = () => {
    setPuntos(puntos + 5);
  };

  const sumarPuntos15 = () => {
    setPuntos(puntos + 15);
  };

  const sumarPuntos30 = () => {
    setPuntos(puntos + 30);
  };

  const restarPuntos5 = () => {
    setPuntos(puntos - 5);
  };

  const restarPuntos15 = () => {
    setPuntos(puntos - 15);
  };

  const restarPuntos30 = () => {
    setPuntos(puntos - 30);
  };

  return (
    <div className="App">
      <Puntaje puntaje={puntos}/>

      <div>
        <Boton sumarPuntos={sumarPuntos5}>
          +5
        </Boton>
        <Boton sumarPuntos={sumarPuntos15}>
          +15
        </Boton>
        <Boton sumarPuntos={sumarPuntos30}>
          +30
        </Boton>
      </div>

      <div>
        <Boton sumarPuntos={restarPuntos5}>
          -5
        </Boton>
        <Boton sumarPuntos={restarPuntos15}>
          -15
        </Boton>
        <Boton sumarPuntos={restarPuntos30}>
          -30
        </Boton>
      </div>
    </div>
  );
}

export default App;
