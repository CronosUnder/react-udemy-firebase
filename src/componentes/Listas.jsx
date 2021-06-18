
import React, { useState } from 'react'

const Listas = () => {
    const estadoInicial = [1,2,3,4,5]
    const [listado, setlistado] = useState(estadoInicial)
    return (
        <div>
            <h2>Listas</h2>
            {
            listado.map((elemento,index) => (
                <h3 key={index}>{elemento} . posicion {index}</h3>
            ))
           } 
        </div>
    )
}

export default Listas
