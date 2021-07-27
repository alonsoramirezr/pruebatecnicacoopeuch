import {
    CREATE_TAREA,
    GET_TAREAS,
    UPDATE_TAREA,
    REMOVE_TAREA
} from "./type";

import TareaService from "../services/TareaServices";

export const crearTarea = (descripcion, fecha_creacion, vigente) => async (dispatch) =>{
    try{
        const res = await TareaService.createTarea({descripcion, fecha_creacion, vigente});

        dispatch({
            type: CREATE_TAREA,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err){
        return Promise.reject(err);
    }
};

export const getTareas = () => async (dispatch) => {
    try{
        const res = await TareaService.getTareas();
        
        dispatch({
            type: GET_TAREAS,
            payload: res.data,
        });
    } catch (err){
        console.log(err);
    }
};

export const updateTarea = (data) => async (dispatch) =>{
    try{
        const res = await TareaService.updateTarea(data);

        dispatch({
            type: UPDATE_TAREA,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err){
        return Promise.reject(err);
    }
};

export const deleteTarea = (id) => async (dispatch) => {
    try {
      await TareaService.removeTarea(id);
  
      dispatch({
        type: REMOVE_TAREA,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
};