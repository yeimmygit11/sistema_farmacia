import "./Template.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function Template(props) {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default Template;
