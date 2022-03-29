import "./App.css";
import Areas from "./components/Areas/Areas";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Template from "./components/template/Template";
import ViewArea from "./components/ViewArea/ViewArea";
import Login from "./components/Login/Login";
import Personal from "./components/Personal/personal";
import Inventario from "./components/Inventario/Inventario";
import Medicamentos from "./components/Medicamentos/Medicamentos";
import Proveedores from "./components/Proveedores/Proveedores";
import Comprador from "./components/Comprador/Comprador";
import Ventas from "./components/Ventas/Ventas";
import Formulario from "./components/Formulario/Formulario-inventario";
import FormularioMed from "./components/Formulario/Formulario-medicamentos";
import FormularioPro from "./components/Formulario/Formulario-proveedores";
import FormularioCom from "./components/Formulario/Formulario-comprador";
import FormularioPer from "./components/Formulario/Formulario-personal";
import FormularioVen from "./components/Formulario/Formulario-ventas";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<Navigate to="/areas" replace />} />
            <Route path="areas" element={<Areas />} />
            <Route path="area/:id" element={<ViewArea />} />
            <Route path="inventario" element={<Inventario></Inventario>} />
            <Route path="medicamentos" element={<Medicamentos></Medicamentos>} />
            <Route path="proveedores" element={<Proveedores></Proveedores>} />
            <Route path="comprador" element={<Comprador></Comprador>} />
            <Route path="personal" element={<Personal></Personal>} />
            <Route path="ventas" element={<Ventas></Ventas>} />
            <Route path="formulario-inventario" element={<Formulario></Formulario>}/>
            <Route path="formulario-medicamento" element={<FormularioMed></FormularioMed>}/>
            <Route path="formulario-proveedor" element={<FormularioPro></FormularioPro>}/>
            <Route path="formulario-comprador" element={<FormularioCom></FormularioCom>}/>
            <Route path="formulario-personal" element={<FormularioPer></FormularioPer>}/>
            <Route path="formulario-ventas" element={<FormularioVen></FormularioVen>}/>
            <Route path="login" element={<Login></Login>} />
          </Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
