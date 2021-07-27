package com.aramirez.coopeuch.pruebatecnica.modelo;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "tarea")
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "identificador", unique = true, nullable = false)
    private long identificador;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "fecha_creacion")
    private Date fecha_creacion;

    @Column(name = "vigente")
    private boolean vigente;

    public Tarea(){

    }

    public Tarea(long identificador, String descripcion, Date fecha_creacion, boolean vigente){
        this.identificador = identificador;
        this.descripcion = descripcion;
        this.fecha_creacion = fecha_creacion;
        this.vigente = vigente;
    }

    public long getIdentificador() {
        return identificador;
    }

    public void setIdentificador(long identificador) {
        this.identificador = identificador;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFecha_creacion() {
        return fecha_creacion;
    }

    public void setFecha_creacion(Date fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public boolean isVigente() {
        return vigente;
    }

    public void setVigente(boolean vigente) {
        this.vigente = vigente;
    }

    @Override
    public String toString() {
        return "Tarea{" +
                "identificador=" + identificador +
                ", descripcion='" + descripcion + '\'' +
                ", fecha_creacion=" + fecha_creacion +
                ", vigente=" + vigente +
                '}';
    }
}
