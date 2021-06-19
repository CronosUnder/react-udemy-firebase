import React from 'react'

export const Comentar = ({urlImagen,nombre,comentario}) => {
    return (
        <div className="media mt-1">
            <img className="mr-3" src={urlImagen} alt="avatar"/>
            <div className="mediaBody">
                <h5 className="mt-0">{nombre}</h5>
                {comentario}
            </div>
        </div>
    )
}
