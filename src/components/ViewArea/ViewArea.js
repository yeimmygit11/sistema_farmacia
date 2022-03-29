import { useParams } from "react-router-dom";
import "./ViewArea.css";
import { useState, useEffect } from "react";

function ViewArea() {
  const { id } = useParams();

  const [area, setArea] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3000/json/${id}.json`)
      .then((response) => response.json())
      .then((data) => setArea(data));
  }, [id]);

  if (!area) return null;

  return (
    <article id="area">
      <div className="container">
        <h1 className="mb-3">
          <i className="fas fa-film"></i> {area.titulo}
        </h1>

        <div className="wrapper flex">
          <img className="poster" src={area.imagen} alt={area.titulo} />
          <div className="info">
            <p className="calificacion">
              <i className="fas fa-star"></i> 7.5
            </p>
            <p className="sinopsis">{area.sinopsis}</p>
            <p className="director">
              <span className="label">Director:</span>{" "}
              <a href="/">{area.director}</a>
            </p>
            <p className="actores">
              <span className="label">Actores:</span>
            </p>
            <ul>
              {area.actores.map((actor) => {
                return (
                  <li key={actor}>
                    <a href="/">{actor}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ViewArea;
