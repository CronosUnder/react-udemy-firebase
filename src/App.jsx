import React from "react";
import { Comentar } from "./componentes/Comentar";
function App() {
  return (
    <div className="container mt-1" >
      <h1 className="text-center">Proyecto desde 0</h1>
      <Comentar urlImagen="https://picsum.photos/64" nombre="Claudio" comentario="Hola como estan"/>
      <Comentar urlImagen="https://picsum.photos/64" nombre="Juan" comentario="Bien y tu"/>
    </div>
  );
}

export default App;
