create database chickenTest;

use chickenTest;

create table Farm (
id bigint(10) auto_increment primary key,
nameF varchar(50) not null
);

create table Chicken(
id bigint(10) auto_increment primary key,
farmId bigint(10) not null,
eggs bigint(10),
foreign key (farmId) references Farm(id)
);