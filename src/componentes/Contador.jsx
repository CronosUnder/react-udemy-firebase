import React from 'react'

const Contador = () => {
    const [contador, setContador] = React.useState(0)
    return (
        <div>
            <h1>Este es el contador</h1>
            <div>
                <span>{contador} {contador>5?'Calorsito':'Frio'}</span>
            </div>
            <button onClick={() => { setContador(contador + 1) }}>Aumentar</button>
            <button onClick={() => { setContador(contador - 1) }}>Disminuir</button>
        </div>
    )
}

export default Contador
