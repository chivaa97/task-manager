import logo from "./imagenes/FCCL.png"
import './App.css';
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo"
        src={logo} alt="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        {/* <Tarea texto="Aprender  React" /> */}
        {/* <TareaFormulario /> */}
        <ListaDeTareas />
      </div> 
     </div>
  );
}

export default App;
