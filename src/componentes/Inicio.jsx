import React from 'react'
import { firebaseApp } from '../configuraciones/firebase'
export const Inicio = () => {
    const [tareas, setTareas] = React.useState([])
    const [id, setId] = React.useState('')
    const [cargandoTareas, setCargandoTareas] = React.useState(true)
    const [editando, setEditando] = React.useState(false)
    const [tarea, setTarea] = React.useState('')
    const db = firebaseApp.firestore()
    const tareas_collection_name = 'tareas'
    const collection = db.collection(tareas_collection_name)
    React.useEffect(() => {
        const obtenerFatos = async () => {
            try {
                const data = await collection.get()
                const arr_data = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setTareas(arr_data);
            } catch (e) {
                console.error(e)
            }
            finally {
                setCargandoTareas(false)
            }
        }
        obtenerFatos()
    })
    const asignarNombreTarea = (valor) => {
        setTarea(valor)
    }
    const eliminar = async (tarea) => {
        await collection.doc(tarea.id).delete()
        setTareas(tareas.filter(item => item.id !== tarea.id))
    }
    const editar = async (tarea) => {
        setEditando(true)
        setTarea(tarea.nombre)
        setId(tarea.id)
    }
    const editarTarea = async (e) => {
        e.preventDefault()
        if (!tarea.trim()) {
            return;
        }
        try {
            await collection.doc(id).update({
                nombre: tarea,
                fechaActualizacion: Date.now()
            })
            const tareas_filtradas = tareas.filter(item=> item.id !== id)
            setTareas([
                ...tareas_filtradas,
                { id: id, ...tarea }
            ])
            setTarea('')
            setId('')
            setEditando(false)
            e.target.reset()
        } catch (error) {
            console.log(error)
        }
    }
    const agregarTarea = async (e) => {
        e.preventDefault()
        if (!tarea.trim()) {
            return;
        }
        try {
            const nuevaTarea = {
                nombre: tarea,
                fecha: Date.now()
            }
            const data = await collection.add({
                nombre: tarea,
                fecha: Date.now()
            })
            setTareas([
                ...tareas,
                { id: data.id, ...nuevaTarea }
            ])
            setTarea('')
            e.target.reset()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h2>Lista de tareas</h2>
                    <ul className="list-group">
                        {cargandoTareas ? (<li className="list-group-item" >Cargando Tareas</li>) : null}
                        {
                            tareas.map(tarea => (
                                <li className="list-group-item" key={tarea.id}>
                                    {tarea.nombre}
                                    <button className="btn btn-sm btn-danger float-right mr-2 " onClick={e => { eliminar(tarea) }}>Eliminar</button>
                                    <button className="btn btn-sm btn-warning float-right mr-2 " onClick={e => { editar(tarea) }}>Editar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>{editando ? 'Editar Tarea' : 'Agregar Tarea'}</h3>
                    <form onSubmit={editando ? editarTarea : agregarTarea}>
                        <input
                            type="text"
                            placeholder="Nombre tarea"
                            className="form-control mb-2"
                            onChange={e => { asignarNombreTarea(e.target.value) }}
                            value={tarea}
                        />
                        <button className={
                            editando ? 'btn btn-block btn-warning' : 'btn btn-block btn-dark'
                        } type="agregar">{editando ? 'Guardar Tarea Editada' : 'Guardar Tarea'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
