import "./Areas.css";
import Area from "../Area/Area";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";


function Areas() {
  const [areas, setAreas] = useState([]);

  const { user } = useContext(UserContext);
  const isUserLoggedIn = user ? true : false;

  return (
    <section id="areas">
        <div className="grid-areas flex">
          <Area data="/img/lista (2).png" info="Inventario" path="inventario"></Area>
          <Area data="/img/jarabe.png " info="Medicamentos" path="medicamentos"></Area>
          <Area data="/img/repartidor.png" info="Proveedores" path="proveedores"></Area>
          <Area data="/img/cliente.png" info="Comprador"path="comprador"></Area>
          <Area data="/img/oculista.png" info="Personal" path="personal"></Area>
          <Area data="/img/factura.png" info="Ventas" path="ventas"></Area>
        </div>
    </section>
  );
}

export default Areas;
