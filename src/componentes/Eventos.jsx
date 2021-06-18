import React, { useState } from 'react'
const Eventos = () => {
    const [texto, setTexto] = useState('Evento')
    const eventoClick = () => {
        setTexto('Nuevo')
    }
    return (
        <>
            <hr></hr>
            <h2>{texto}</h2>
            <button onClick={() => eventoClick()}>Boton</button>
        </>
    )
}

export default Eventos
