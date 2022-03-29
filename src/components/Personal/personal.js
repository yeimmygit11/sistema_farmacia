import "./personal.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";




function Personal() {
  const [personal, setPersonal] = useState([]);

  const cargarPersonal = () => {
    fetch("http://localhost:3000/json/personal.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setPersonal(data));
  };

  useEffect(() => {
    cargarPersonal();
  }, []);

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
      <>
      {isUserLoggedIn ? (
      <div className="container-1">
        <div className="table-responsive">
          <table className="table table-hover caption-top">
            <caption>Personal de la farmacia</caption>
            

            <thead id="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Número</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="table-body">
              {personal.map((persona) => {
                return (
                  <tr key={persona._id}>
                    <td>{persona._id}</td>
                    <td>{persona.Nombre}</td>
                    <td>{persona.Numero_contacto}</td>
                    <td>
                        <button type="submit" className="btn btn-editar">Editar</button>
                    </td>
                    <td>
                        <button type="submit" className="btn btn-eliminar">Eliminar</button>                                                
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="/formulario-personal">
            <button type="submit" className="btn btn-agregar">Agregar personal</button>
          </Link> 
        </div>
      </div> 
      ):null}
      </>
    );
  }

export default Personal;