import React, { useState } from "react";
import "../hoja-de-estilo/TareaFormulario.css"
import { v4 as uuidv4 } from 'uuid';


function TareaFormulario(props){

  const [input,setinput] = useState('');



    const manejarCambio = e => {
      setinput(e.target.value);

    }

    const manejarEnvio = e => {
      e.preventDefault(); 
      const tareaNueva  = {
        id: uuidv4(),
        texto: input,
        completada : false
      }
      props.onSubmit(tareaNueva);
    }
    
  

  return (
    <form onSubmit={manejarEnvio} action="" className="tarea-formulario">
      <input type="text"
             className="tarea-input" 
             placeholder="Write a task"
             name="texto"
             onChange={ manejarCambio } />

      <button className="tarea-boton">
        Add Task
      </button>
    </form>
  )
}
export default TareaFormulario;