import { Link } from "react-router-dom";
import "./Area.css";

function Area({ data, info, path}) {
  return (
    <div className="area flex justify-space-between align-items">
      <div className="imagen">
        <img src={data}></img>
      </div> 
      <div className=" info flex align-center">
      <Link to={`/${path}`}>{info}</Link> 
      </div>
    </div>
  );
}

export default Area;
