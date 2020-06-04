import React, { useState, useEffect } from "react";
import AgregarTarea from "./componentes/AgregarTarea";
import TareaPendiente from "./componentes/TareaPendiente";
import TareaPorHacer from "./componentes/TareaPorHacer";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [tareas, setTareas] = useState([
    { id: uuidv4(), hecho: false, nombre: "Finalizar este tutorial" },
    {
      id: uuidv4(),
      hecho: false,
      nombre: "Dejar un like al video",
    },
    {
      id: uuidv4(),
      hecho: false,
      nombre: "Suscribirse al canal",
    },
  ]);
  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };
  const modificarTarea = (id, nombre) => {
    let nuevaTarea = tareas.find((t) => t.id === id);
    nuevaTarea.nombre = nombre;
  };
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <AgregarTarea agregarTarea={agregarTarea} />
      <TareaPendiente tareas={tareas} />
      {tareas.map((t) => (
        <TareaPorHacer
          key={t.id}
          tarea={t}
          eliminarTarea={eliminarTarea}
          modificarTarea={modificarTarea}
        />
      ))}
    </div>
  );
}

export default App;
