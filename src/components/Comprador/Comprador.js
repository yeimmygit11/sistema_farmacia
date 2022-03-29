import "./Comprador.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";




function Comprador() {
  const [compradores, setComprador] = useState([]);

  const cargarComprador = () => {
    fetch("http://localhost:3000/json/comprador.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setComprador(data));
  };

  useEffect(() => {
    cargarComprador();
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
            <caption>Compradores</caption>
            

            <thead id="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="table-body">
              {compradores.map((comprador) => {
                return (
                  <tr key={comprador._id}>
                    <td>{comprador._id}</td>
                    <td>{comprador.Nombre}</td>
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
          <Link to="/formulario-comprador">
            <button type="submit" className="btn btn-agregar">Agregar comprador</button>
          </Link> 
        </div>
      </div> 
      ):null}
      </>
    );
  }

export default Comprador;