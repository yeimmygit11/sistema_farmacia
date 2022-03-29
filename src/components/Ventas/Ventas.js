import "./Ventas.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function Ventas() {
  const [medicamento, setMedicamentos] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [compradores, setComprador] = useState([]);

  const { _id } = useParams();
  const cargarMedicamentos = () => {
    fetch("http://localhost:3000/json/Medicamentos.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setMedicamentos(data));
  };
  const cargarVentas = () => {
    fetch("http://localhost:3000/json/ventas.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setVentas(data));
  };

  const cargarPersonal = () => {
    fetch("http://localhost:3000/json/personal.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setPersonal(data));
  };

  const cargarComprador = () => {
    fetch("http://localhost:3000/json/comprador.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setComprador(data));
  };

  useEffect(() => {
    cargarMedicamentos();
  }, []);

  useEffect(() => {
    cargarVentas();
  },[]);

  useEffect(() => {
    cargarPersonal();
  }, []);

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
            <caption>Ventas realizadas</caption>
            <thead id="table-head">
              <tr>
                <th scope="col">Mes</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Comprador</th>
                <th scope="col">Personal</th>
                <th scope="col">Medicamento</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="table-body">
              {ventas.map((venta) => {
                return (
                  <tr key={venta._id}>
                    <td>{venta.Mes}</td>
                    <td>{venta.Cantidad}</td>
                    <td>{compradores.map((comprador) => {
                      if(comprador._id == venta.Comprador.$id){
                        return comprador.Nombre;
                      } 
                    })}</td>
                    <td>{personal.map((persona) => {
                      if(persona._id == venta.Personal.$id){
                        return persona.Nombre;
                      } 
                    })}</td>
                    <td>{medicamento.map((med) => {
                      if(med._id == venta.Medicamento.$id){
                        return med.medicamento;
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
          <Link to="/formulario-ventas">
            <button type="submit" className="btn btn-agregar">Agregar venta</button>
          </Link> 
        </div>
      </div> 
      ):null}
      </>
    );
  }

export default Ventas;