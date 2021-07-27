import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTareas, deleteTarea } from "../actions/tareas";
import { Link } from "react-router-dom";

const TareasList = () => {
    const [currentTarea, setCurrentTarea] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const tareas = useSelector(state => state.tareas);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTareas());
    });

    const setActiveTarea = (tarea, index) => {
        setCurrentTarea(tarea);
        setCurrentIndex(index);
    };

    const removeTarea = () => {
      dispatch(deleteTarea(currentTarea.identificador))
        .then(() => {
         window.location.reload();
        })
        .catch(e => {
          console.log(e);
        });
    };

    return (
      <div className="list row">
      <div className="col-md-8">
        <h4>Tareas</h4>

        <ul className="list-group">
          {tareas &&
            tareas.map((tarea, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTarea(tarea, index)}
                key={index}
              >
                {tarea.descripcion}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentTarea ? (
          <div>
            <h4>Tarea</h4>
            <div>
              <label>
                <strong>Identificador:</strong>
              </label>{" "}
              {currentTarea.identificador}
            </div>
            <div>
              <label>
                <strong>Descripcion:</strong>
              </label>{" "}
              {currentTarea.descripcion}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentTarea.vigente ? "Vigente" : "No vigente"}
            </div>

            <Link to={"/tarea/" + currentTarea.identificador} className="btn btn-primary" id="botonEditar">
              Editar
            </Link>
            <button className="btn btn-danger" onClick={removeTarea} id="botonEliminar">
              Eliminar
            </button>
          </div>
        ) : (
          <div>
            <br />
            <p>Haz click en una tarea</p>
          </div>
        )}
      </div>
    </div>
    );
}

export default TareasList;