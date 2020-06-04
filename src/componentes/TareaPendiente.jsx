import React from "react";
const TareaPendiente = (props) => {
  return (
    <React.Fragment>
      <h2>Tareas Pendientes {props.tareas.length}</h2>
    </React.Fragment>
  );
};

export default TareaPendiente;
