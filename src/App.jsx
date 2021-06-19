import React from "react";
import shortid from 'shortid'

function App() {
  const [tareas, setTareas] = React.useState([])
  const [editar, setEditar] = React.useState(false)
  const [tarea, setTarea] = React.useState('')
  const [id, setId] = React.useState('')
  const agregarTarea = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      return
    }
    e.target.reset()
    setTareas([...tareas, {id: shortid.generate(), tarea}])
    setTarea('')
  }
  const editarTareaForm = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      return
    }
    e.target.reset()
    const tareasEditadas = tareas.map(
      item => item.id === id ? {id, tarea} : item
    )
    setTareas(tareasEditadas)
    setTarea('')
    setId('')
    setEditar(false)
  }
  const eliminatTarea = (id) => {
    const tareasQueNoSonElId = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasQueNoSonElId)
  }
  const editarTarea = (item) => {
    setEditar(true)
    setTarea(item.tarea)
    setId(item.id)
  }
  return (
    <div className="container">
      <h1 className="text-center">Crud Simple</h1>
      <h2>Hola mundo</h2>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.map((tarea, index) => (
                <li className="list-group-item" key={tarea.id}>
                  <span className="lead">{tarea.tarea}</span>
                  <button
                    className="btn btn-danger btn-sm float-end mx-2"
                    onClick={e => {
                      eliminatTarea(tarea.id)
                    }}>Eliminar
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-end"
                    onClick={e => {
                      editarTarea(tarea)
                    }}>Editar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4
            className="text-center">Formulario {editar ? 'Editar' : 'Agregar'}</h4>
          <form onSubmit={editar ? editarTareaForm : agregarTarea}>
            <input className="form-control mb-2" placeholder="Ingrese tarea"
                   onChange={e => setTarea(e.target.value)} value={tarea}/>
            <div className="d-grid gap-2">
              {
                editar ?
                  (<button className="btn btn-warning">Editar</button>) :
                  (<button className="btn btn-dark">Agregar</button>)
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
