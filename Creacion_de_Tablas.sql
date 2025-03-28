#Revisamos Tablas
show databases;
# Para trabaja en la base de Datos
use node_adso_wili;

#Creamos la Tablas Fuertes
create table categorias(
id  int auto_increment primary key,
nombre varchar(200) not null,
descripcion text null,
create_at timestamp default current_timestamp, #Crear tiempo genera de la base de Datos
updated_at timestamp default current_timestamp on update current_timestamp 
# la base de datos se actulizarar como metodo final 
);


create table productos(
 id int auto_increment primary key,
 nombre varchar(250) not null,
 descripcion text,
 precio decimal(10,2),
 categoria_id int,
 create_at timestamp default current_timestamp, #Crear tiempo genera de la base de Datos
 updated_at timestamp default current_timestamp on update current_timestamp ,
 foreign key (categoria_id) references categorias(id) on delete set null
 # Cuanod eliminemos la categoria que el campo se vuelva nulo 
);
