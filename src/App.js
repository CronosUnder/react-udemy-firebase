import Parrafo from "./componentes/Parrafo";
import Variables from "./componentes/Variables";
import Eventos from "./componentes/Eventos";
import Contador from "./componentes/Contador";
import Listas from "./componentes/Listas";

function App() {
  return (
    <div>
      <h1>Hola mundo React!</h1>
      <Parrafo/>
      <Variables></Variables>
      <Eventos/>
      <Contador/>
      <Listas/>
    </div>
  );
}

export default App;
