import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearTarea } from "../actions/tareas";

const CreaTarea = () => {
    const initialTareaState = {
        descripcion: "",
        fecha_creacion:"",
        vigente: false
    };

    const [tarea, setTarea] = useState(initialTareaState);
    const [submitted, setSubmitted] = useState(false);
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTarea({...tarea, [name]: value});
    };

    const handleChange = () =>{
      setChecked(!checked);
    }

    const saveTarea = () => {
        const { descripcion, fecha_creacion, vigente } = tarea;
        
        dispatch(crearTarea(descripcion, fecha_creacion, vigente))
        .then(data => {
            setTarea({
                descripcion: data.descripcion,
                fecha_creacion: data.fecha_creacion,
                vigente: data.vigente
            });
            setSubmitted(true);
            console.log(data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const nuevaTarea = () => {
        setTarea(initialTareaState);
        setSubmitted(false);
        setChecked(false);
    };

    return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>Tarea creada exitosamente</h4>
              <button className="btn btn-success" onClick={nuevaTarea}>
                Nueva tarea
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="descripcion">Descripcion</label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcion"
                  required
                  value={tarea.descripcion}
                  onChange={handleInputChange}
                  name="descripcion"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="fecha_creacion">Fecha creacion</label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha_creacion"
                  required
                  value={tarea.fecha_creacion}
                  onChange={handleInputChange}
                  name="fecha_creacion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="vigente">Vigente</label>
                <input
                  type="checkbox"
                  id="vigente"
                  checked={checked}
                  onChange={handleChange}
                  name="vigente"
                />
              </div>
              <br/>
              <button onClick={saveTarea} className="btn btn-success">
                Guardar
              </button>
            </div>
          )}
        </div>
      );
};

export default CreaTarea;