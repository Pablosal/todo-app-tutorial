import React, { useState } from "react";
const TareaPorHacer = ({ tarea, eliminarTarea, modificarTarea }) => {
  const [edicion, setEdicion] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <input type="checkbox" value={tarea.hecho} name="hecho" id="hecho" />

      {edicion ? (
        <>
          <input
            type="text"
            name="nombreNuevo"
            value={nuevoNombre}
            placeholder={tarea.nombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            id="nombreNuevo"
          />
          <button
            onClick={() => {
              console.log(nuevoNombre);
              modificarTarea(tarea.id, nuevoNombre);
              setEdicion(!edicion);
            }}
            className="btn btn-success"
          >
            :)
          </button>
        </>
      ) : (
        <h3>{tarea.nombre}</h3>
      )}

      <i
        className="fas fa-pen-square fa-2x"
        onClick={() => setEdicion(!edicion)}
      ></i>
      <button
        onClick={() => eliminarTarea(tarea.id)}
        className="btn btn-danger"
      >
        Eliminar
      </button>
    </div>
  );
};

export default TareaPorHacer;
