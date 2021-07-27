# pruebatecnicacoopeuch

Proyecto fullstack que contiene los servicios rest para realizar los crud de las Tareas para el backend y react para el frontend. 

El backend se encuentra en la rama master y el frontend se encuentra en la rama front_branch.

Este proyecto utiliza Java11, Springboot, Hibernate y postgreSQL

El proyecto se debe levantar siguiendo los siguientes pasos:

1. Crear la base de datos en postgresSQL con el nombre pruebaCoopeuch
2. configurar el application.properites con los parametros de su anteriormente creada bd. Queda adjunto application.propperties de ejemplo

spring.jpa.database=POSTGRESQL
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost/pruebaCoopeuch
spring.datasource.username=*su nombre de usuario de postgres*
spring.datasource.password=*su clave de postgres*
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true

3. Una vez que realice la configuracion, proceda a descargar las dependencies en maven para evitar conflictos de dependencias.
4. Ahora puede correr el proyecto. 
  
Este proyecto incluye una documentacion por swagger, por lo que si quiere entrar a ver las apis, puede entrar a localhost:<numero de puerto configurado en properties>/swagger-ui.html
  
Las apis construidas son las siguientes:

(POST) localhost:3334/api/v1/crearTarea/ = crea una tarea a partir del body que se le pasa. Este body es 

{
    "descripcion":"tarea 3",
    "fecha_creacion":"2021-07-11",
    "vigente":true
}

(GET) localhost:3334/api/v1/tareas = obtiene todas las tareas de la bd

(GET) localhost:3334/api/v1/tarea/{id_tarea} = obtiene una tarea, dependiendo del id que se le entrega por la url

(PUT) localhost:3334/api/v1/tarea/{id_tarea} = actualiza la tarea que ha sido llamada a traves de la url con el body entregado. 

(DELETE) localhost:3334/api/v1/tarea/{id_tarea} = elmina una tarea, dependiendo del id que se le entrega por la url
