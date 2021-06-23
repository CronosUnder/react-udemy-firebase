import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {
    const [persona, setPersona] = React.useState({})
    const {id} = useParams('id')
    React.useEffect(() => {
        const obtenerDatos = async () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => response.json())
                .then(json => setPersona(json))
        }
        console.log("useFect")
        obtenerDatos()

    }, [id])
    return (
        <div>
            <h4>{persona.name}</h4>
            <hr/>
            <div className="row">
                    <div className="col-3">{persona.email}</div>
                    <div className="col-3">{persona.phone}</div>
                    <div className="col-3">{persona.website}</div> 
            </div>
        </div>
    )
}
export default Persona