import "./Formulario.css";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";


function Formulario() {
  const [formulario, setFormulario] = useState([]);

  const { user } = useContext(UserContext);
  const isUserLoggedIn = user ? true : false;

  
  if(isUserLoggedIn==false){
    return (
      <>
      <div className="container-2">
        <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
          <strong>¡Bienvenido al sistema de gestión de farmacia!</strong> Por favor, inicia sesión
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div className="imagen-alerta">
          <img src={"/img/signo-de-exclamacion.png"}></img>
        </div> 
      </div>
      </>
    );
  }

  return (
   <div className="container-f">
    <form>
        <div className="form-group">
            <label >Fecha</label>
            <input className="form-control" type="text"/>    
        </div>
        <div className="form-group">
            <label >Medicamento</label>
            <input className="form-control" type="text" />  
        </div>
        <div className="form-group">
            <label >Stock</label>
            <input className="form-control" type="text"/>  
        </div>
        <button type="submit" className="btn btn-primary btn-agregari">Agregar</button>
    </form>
   </div>
  );
}

export default Formulario;
