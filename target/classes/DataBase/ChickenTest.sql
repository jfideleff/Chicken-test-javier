create database chickenTest;

use chickenTest;

create table Farm (
id bigint(10) auto_increment primary key,
nameF varchar(50) not null
);

create table Chicken(
id bigint(10) auto_increment primary key,
nameC varchar(20) not null,
farmId bigint(10) not null,
foreign key (farmId) references Farm(id)
);

create table Egg (
id bigint(10) primary key auto_increment,
size varchar(15) not null,
chickenId bigint(10) not null,
foreign key (chickenId) references Chicken(id)
);

insert into Farm (nameF) values ('The good Farm'),('The bad farm'),('The ugly Farm');

insert into Chicken (nameC,farmId) values
('Rosa',1),
('Perla',2),
('Jazmin',3),
('Azalea',2),
('Violeta',1);

insert into Egg (chickenId,size) values
(1,'small'),
(2,'big'),
(3,'small'),
(4,'big'),
(5,'small'),
(4,'big'),
(2,'small');