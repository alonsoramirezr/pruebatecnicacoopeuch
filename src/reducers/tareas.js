import {
    CREATE_TAREA,
    GET_TAREAS,
    UPDATE_TAREA,
    REMOVE_TAREA
} from "../actions/type";

const initialState = [];

function tareaReducer(tareas = initialState, action){
    const { type, payload } = action;

    switch(type) {
        case CREATE_TAREA:
            return [...tareas, payload];
        
        case GET_TAREAS:
            return payload;
        
        case UPDATE_TAREA:
            return tareas.map((tarea) => {
                if(tarea.id === payload.id){
                    return {
                        ...tarea,
                        ...payload,
                    };
                } else {
                    return tarea;
                }
            });
        
        case REMOVE_TAREA:
            return tareas.filter(({id}) => id !== payload.id);
        default:
            return tareas;
    }
}

export default tareaReducer;