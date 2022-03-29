import "./Proveedores.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";




function Proveedores() {
  const [proveedores, setProveedores] = useState([]);

  const cargarProveedores = () => {
    fetch("http://localhost:3000/json/Proveedores.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setProveedores(data));
  };

  useEffect(() => {
    cargarProveedores();
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
            <caption>Proveedores</caption>
            

            <thead id="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Proveedor</th>
                <th scope="col">NIT</th>
                <th scope="col">Dirección</th>
                <th scope="col">Encargad@</th>
                <th scope="col">Número</th>
                <th scope="col">Correo</th>
                <th scope="col">Ciudad</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="table-body">
              {proveedores.map((proveedor) => {
                return (
                  <tr key={proveedor._id}>
                    <td>{proveedor._id}</td>
                    <td>{proveedor.nombre_proveedor}</td>
                    <td>{proveedor.Nit}</td>
                    <td>{proveedor.Direccion}</td>
                    <td>{proveedor.Persona_encargada}</td>
                    <td>{proveedor.Numero_contacto}</td>
                    <td>{proveedor.correo}</td>
                    <td>{proveedor.ciudad}</td>
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
          <Link to="/formulario-proveedor">
            <button type="submit" className="btn btn-agregar">Agregar proveedor</button> 
          </Link>
        </div>
      </div> 
      ):null}
      </>
    );
  }

export default Proveedores;