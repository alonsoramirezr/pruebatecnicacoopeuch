import http from "../http-common";

const getTareas = () => {
    return http.get("/tareas");
};

const createTarea = data => {
    return http.post("/crearTarea", data);
};

const updateTarea = (data) => {
    return http.put(`/actualizarTarea/${data.identificador}`, data);
};

const removeTarea = id => {
    return http.delete(`/eliminarTarea/${id}`);
};

const getTarea = (id) =>{
    return http.get(`/tarea/${id}`);
}

const TareaService = {
    getTareas,
    createTarea,
    updateTarea,
    removeTarea,
    getTarea
};

export default TareaService;