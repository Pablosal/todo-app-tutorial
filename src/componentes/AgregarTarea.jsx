import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AgregarTarea = (props) => {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    nombre: "",
    hecho: false,
  });
  const manejarCambio = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const enSubida = (e) => {
    e.preventDefault();
    props.agregarTarea(todo);
    setTodo({
      id: uuidv4(),
      nombre: "",
      hecho: false,
    });
  };

  return (
    <form onSubmit={enSubida}>
      <input
        type="text"
        name="nombre"
        value={todo.nombre}
        onChange={manejarCambio}
        id="nombre"
      />
      <input
        type="submit"
        value="Agregar Tarea"
        className="btn btn-success ml-2"
      />
    </form>
  );
};

export default AgregarTarea;
