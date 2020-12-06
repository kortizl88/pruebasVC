
import './App.css';
import { Botones } from './Botones';
import { Cambios } from './Cambios';
import { Fase5 } from './Fase5';
import { ContenedorImages } from './ContenedorImages';
import { FaseSeis } from './FaseSeis';

function App() {
  return (
    <div className="App">
      <h1>Cambios de la fase 3</h1>
      <h2>estos son los cambios </h2>
      <Cambios />
      <Fase5 />
      <FaseSeis />
      <ContenedorImages />
      <Botones />
      <h3>Fin</h3>
    </div>
  );
}

export default App;
