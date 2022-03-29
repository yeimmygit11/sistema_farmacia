import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu flex flex.align-center">
      <li>
        <Link to="inventario">Inventario</Link>
      </li>
      <li>
        <Link to="medicamentos">Medicamentos</Link>
      </li>
      <li>
        <Link to="proveedores">Proveedores</Link>
      </li>
      <li>
        <Link to="comprador">Comprador</Link>
      </li>
      <li>
        <Link to="personal">Personal</Link>
      </li>
      <li>
        <Link to="ventas">Ventas</Link>
      </li>
    </ul>
  );
}

export default Menu;
