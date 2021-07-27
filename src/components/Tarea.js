import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTarea } from "../actions/tareas";
import TareaService from "../services/TareaServices";

const Tarea = (props) => {
  const initialTareaState = {
    identificador: null,
    descripcion: "",
    fecha_creacion: "",
    vigente: false
  };
  const [currentTarea, setCurrentTarea] = useState(initialTareaState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getTarea = id => {
    TareaService.getTarea(id)
      .then(response => {
        setCurrentTarea(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTarea(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTarea({ ...currentTarea, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      identificador: currentTarea.identificador,
      descripcion: currentTarea.descripcion,
      fecha_creacion: currentTarea.fecha_creacion,
      vigente: status
    };
    
    dispatch(updateTarea(data))
      .then(response => {
        console.log(response);

        setCurrentTarea({ ...currentTarea, vigente: status });
        setMessage("El estado se actualizo correctamente");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateTarea(currentTarea))
      .then(response => {
        console.log(response);

        setMessage("La tarea se actualizo correctamente!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTarea ? (
        <div className="edit-form">
          <h4>Tarea</h4>
          <form>
            <div className="form-group">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                type="text"
                className="form-control"
                id="descripcion"
                name="descripcion"
                value={currentTarea.descripcion}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fecha_creacion">Fecha creacion</label>
              <input
                type="text"
                className="form-control"
                id="fecha_creacion"
                name="fecha_creacion"
                value={currentTarea.fecha_creacion}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTarea.vigente ? "Vigente" : "No vigente"}
            </div>
          </form>

          {currentTarea.vigente ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              Deshabilitar
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Habilitar
            </button>
          )}

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Actualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Seleccione una tarea</p>
        </div>
      )}
    </div>
  );
};

export default Tarea;