import "./Inventario.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function Inventario() {
  const [inventario, setInventario] = useState([]);
  const [medicamentos, setMedicamentos] = useState([]);
  const { _id } = useParams();
  const cargarInventario = () => {
    fetch("http://localhost:3000/json/inventario.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setInventario(data));
  };
  const cargarMedicamentos = () => {
    fetch("http://localhost:3000/json/Medicamentos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMedicamentos(data));
  };

  useEffect(() => {
    cargarInventario();
  }, []);

  useEffect(() => {
    cargarMedicamentos();
  },[_id]);



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
            <caption>Inventario</caption>
            <thead id="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Fecha</th>
                <th scope="col">Medicamento</th>
                <th scope="col">Stock</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="table-body">
              {inventario.map((invent) => {
                return (
                  <tr key={invent._id}>
                    <td>{invent._id}</td>
                    <td>{invent.Fecha}</td>
                    <td>{medicamentos.map((med) => {
                      if(med._id == invent.Medicamento.$id){
                        return med.medicamento;
                      } 
                    })}</td>

                    <td>{invent.Stock}</td>
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
          <div>
          <Link to="/formulario-inventario">
            <button type="submit" className="btn btn-agregar">Agregar inventario</button>             
          </Link>   
          </div>
        </div>
      </div> 
      ):null}
      </>
    );
  }

export default Inventario;