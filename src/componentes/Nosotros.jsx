import React from 'react'
import { Link } from 'react-router-dom'
export const Nosotros = () => {
    const [equipo, setEquipo] = React.useState([])
    React.useEffect(() => {
        console.log("useFect")
        obtenerDatos()

    }, [])
    const obtenerDatos = async () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setEquipo(json))
    }
    return (
        <div>
            <h1>Nuestro Equipo</h1>
            <hr />
            <ul className="list-group">
                {equipo.map(persona => (<li key={persona.id} className="list-group-item"><Link to={`/nosotros/${persona.id}`}>{persona.name}</Link></li>))}
            </ul>
        </div>
    )
}
export default Nosotros