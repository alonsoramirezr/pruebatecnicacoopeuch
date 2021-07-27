package com.aramirez.coopeuch.pruebatecnica.controller;

import com.aramirez.coopeuch.pruebatecnica.exception.ResourceNotFoundException;
import com.aramirez.coopeuch.pruebatecnica.modelo.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.aramirez.coopeuch.pruebatecnica.repository.TareaRepository;

import java.lang.module.ResolutionException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TareaController {

    @Autowired
    private TareaRepository tareaRepository;

    @GetMapping("/tareas")
    public List<Tarea> listarTareas() { return tareaRepository.findAll(); }

    @GetMapping("/tarea/{id}")
    public ResponseEntity<Tarea> getTareaPorId(@PathVariable(value = "id") Long idTarea) throws ResourceNotFoundException {
        Tarea tarea =tareaRepository.findById(idTarea).orElseThrow(() -> new ResourceNotFoundException("Tarea no encontrada para el id: "+ idTarea));
        return ResponseEntity.ok().body(tarea);
    }

    @PostMapping("/crearTarea")
    public Tarea crearTarea(@Valid @RequestBody Tarea tarea) { return tareaRepository.save(tarea); }

    @PutMapping("/actualizarTarea/{id}")
    public ResponseEntity<Tarea> actualizarTarea(@PathVariable(value = "id") Long idTarea, @Valid @RequestBody Tarea tareaDetalle) throws ResourceNotFoundException {
        Tarea tarea = tareaRepository.findById(idTarea).orElseThrow(() -> new ResourceNotFoundException("tarea no encontrada para este id: " + idTarea));

        tarea.setDescripcion(tareaDetalle.getDescripcion());
        tarea.setFecha_creacion(tareaDetalle.getFecha_creacion());
        tarea.setVigente(tareaDetalle.isVigente());
        final Tarea tareaActualizada = tareaRepository.save(tarea);
        return ResponseEntity.ok(tareaActualizada);
    }

    @DeleteMapping("/eliminarTarea/{id}")
    public Map<String, Boolean> borrarTarea(@PathVariable(value = "id") Long idTarea) throws ResourceNotFoundException {
        Tarea tarea = tareaRepository.findById(idTarea).orElseThrow(() -> new ResourceNotFoundException("tarea no encontrada para este id: " + idTarea));

        tareaRepository.delete(tarea);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Eliminado", Boolean.TRUE);
        return response;
    }
}
