import "./Medicamentos.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";




function Medicamentos() {
  const [medicamento, setMedicamentos] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [tipos, setTipo] = useState([]);

  const { _id } = useParams();
  const cargarMedicamentos = () => {
    fetch("http://localhost:3000/json/Medicamentos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMedicamentos(data));
  };
  const cargarProveedores = () => {
    fetch("http://localhost:3000/json/Proveedores.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setProveedores(data));
  };

  const cargarTipo = () => {
    fetch("http://localhost:3000/json/tipos_medicamentos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setTipo(data));
  };

  useEffect(() => {
    cargarMedicamentos();
  }, []);

  useEffect(() => {
    cargarProveedores();
  },[_id]);

  useEffect(() => {
    cargarTipo();
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
            <caption>Medicamentos disponibles</caption>
            <thead id="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Medicamento</th>
                <th scope="col">Presentación</th>
                <th scope="col">Dosificación</th>
                <th scope="col">Fecha de vencimiento</th>
                <th scope="col">Tipo de medicamento</th>
                <th scope="col">Proveedores</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="table-body">
              {medicamento.map((med) => {
                return (
                  <tr key={med._id}>
                    <td>{med._id}</td>
                    <td>{med.medicamento}</td>
                    <td>{med.presentacion}</td>
                    <td>{med.dosificacion}</td>
                    <td>{med.fecha_vencimiento}</td>
                    <td>{tipos.map((tipo) => {
                      if(tipo._id == med.tipo_medicamento){
                        return tipo.Tipo;
                      } 
                    })}</td>
                    <td>{proveedores.map((proveedor) => {
                      if(proveedor._id == med.proveedores[0].$id){
                        return proveedor.nombre_proveedor + ",      ";
                      }
                      else if(proveedor._id == med.proveedores[1].$id){
                        return proveedor.nombre_proveedor;
                      }
                    })}</td>
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
          <Link to="/formulario-medicamento">
            <button type="submit" className="btn btn-agregar">Agregar medicamento</button>      
          </Link>  
        </div>
      </div> 
      ):null}
      </>
    );
  }

export default Medicamentos;