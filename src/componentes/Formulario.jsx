import React from 'react'

export const Formulario = () => {
    const [personas, setPersonas] = React.useState([])
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const validarForm = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            console.log("nombre vacio")
            return
        }
        if (!apellido.trim()) {
            console.log("apellido vacio")
            return
        }
        e.target.reset()
        setPersonas([...personas, { nombre, apellido }])
        setNombre('')
        setApellido('')
    }
    return (
        <div>
            <h2>
                Formulario
            </h2>
            <form onSubmit={validarForm}>
                <input type="text" className="form-control mt-2" placeholder="Ingrese nombre" onChange={e => { setNombre(e.target.value) }}></input>
                <input type="text" className="form-control mt-2" placeholder="Ingrese Apellido" onChange={e => { setApellido(e.target.value) }}></input>
                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-primary" type="submit">Button</button>
                </div>
            </form>
            <div>
                <ul>
                    {personas.map((persona,indice) => (
                        <li key={indice}>{persona.nombre} {persona.apellido}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Formulario