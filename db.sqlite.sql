BEGIN TRANSACTION;
DROP TABLE IF EXISTS "doctors";
CREATE TABLE "doctors" (
	"id"	INTEGER,
	"nombre"	VARCHAR(255) NOT NULL,
	"matricula"	INTEGER NOT NULL,
	"clinica"	VARCHAR(255) NOT NULL,
	"consultorio"	VARCHAR(255) NOT NULL,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	"especialidadId"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("especialidadId") REFERENCES "especialidads"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
DROP TABLE IF EXISTS "especialidads";
CREATE TABLE "especialidads" (
	"id"	INTEGER,
	"nombre"	VARCHAR(255) NOT NULL,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
DROP TABLE IF EXISTS "horarios";
CREATE TABLE "horarios" (
	"hora"	VARCHAR(255) NOT NULL,
	"ocupado"	TINYINT(1) NOT NULL,
	"id"	INTEGER,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	"doctorId"	INTEGER,
	"turnoId"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("doctorId") REFERENCES "doctors"("id") ON DELETE SET NULL ON UPDATE CASCADE,
	FOREIGN KEY("turnoId") REFERENCES "turnos"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
DROP TABLE IF EXISTS "pacientes";
CREATE TABLE "pacientes" (
	"id"	INTEGER,
	"nombre"	VARCHAR(255) NOT NULL,
	"apellido"	VARCHAR(255) NOT NULL,
	"dni"	INTEGER NOT NULL,
	"email"	VARCHAR(255) NOT NULL,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	"turnoId"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("turnoId") REFERENCES "turnos"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
DROP TABLE IF EXISTS "turnos";
CREATE TABLE "turnos" (
	"id"	INTEGER,
	"Fecha"	TEXT,
	"horarioturno"	INTEGER NOT NULL,
	"paciente"	INTEGER NOT NULL,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	PRIMARY KEY("id")
);
INSERT INTO "doctors" VALUES (1,'Mateo Levrino',16883,'Clínica Amarilla','A3',0,0,2);
INSERT INTO "doctors" VALUES (2,'María Romera',16831,'Clínica Azul','C2',0,0,3);
INSERT INTO "doctors" VALUES (3,'Santiago Cézar',16850,'Clínica Roja','B2',0,0,4);
INSERT INTO "doctors" VALUES (4,'Samir David Arab',17891,'Clínica Azul','C3',0,0,1);
INSERT INTO "doctors" VALUES (5,'Mauricio Cabrera',13718,'Clínica Verde','A8',0,0,5);
INSERT INTO "doctors" VALUES (6,'Ricardo Arjona',17593,'Clínica Roja','B4',0,0,1);
INSERT INTO "doctors" VALUES (7,'Elmer Figueroa',18991,'Clínica Amarilla','A5',0,0,2);
INSERT INTO "doctors" VALUES (8,'Roberto Ocampo',16849,'Clínica Roja','B3',0,0,3);
INSERT INTO "doctors" VALUES (9,'Gloria Trevi',14728,'Clínica Verde','A7',0,0,4);
INSERT INTO "doctors" VALUES (10,'Gladys Jiménez',16877,'Clínica Azul','C4',0,0,5);
INSERT INTO "especialidads" VALUES (1,'Odontología',0,0);
INSERT INTO "especialidads" VALUES (2,'Oftalmología',0,0);
INSERT INTO "especialidads" VALUES (3,'Alergología',0,0);
INSERT INTO "especialidads" VALUES (4,'Otorrinolaringología',0,0);
INSERT INTO "especialidads" VALUES (5,'Podología',0,0);
INSERT INTO "horarios" VALUES ('16:30','false',1,0,0,1,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',2,0,0,2,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',3,0,0,3,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',4,0,0,4,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',5,0,0,5,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',6,'','',6,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',7,'','',7,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',8,'','',8,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',9,'','',9,NULL);
INSERT INTO "horarios" VALUES ('16:30','false',10,'','',10,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',11,'','',1,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',12,'','',2,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',13,'','',3,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',14,'','',4,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',15,'','',5,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',16,'','',6,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',17,'','',7,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',18,'','',8,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',19,'','',9,NULL);
INSERT INTO "horarios" VALUES ('17:00','false',20,'','',10,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',21,'','',1,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',22,'','',2,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',23,'','',3,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',24,'','',4,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',25,'','',5,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',26,'','',6,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',27,'','',7,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',28,'','',8,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',29,'','',9,NULL);
INSERT INTO "horarios" VALUES ('17:30','false',30,'','',10,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',31,'','',1,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',32,'','',2,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',33,'','',3,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',34,'','',4,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',35,'','',5,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',36,'','',6,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',37,'','',7,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',38,'','',8,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',39,'','',9,NULL);
INSERT INTO "horarios" VALUES ('18:00','false',40,'','',10,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',41,'','',1,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',42,'','',2,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',43,'','',3,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',44,'','',4,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',45,'','',5,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',46,'','',6,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',47,'','',7,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',48,'','',8,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',49,'','',9,NULL);
INSERT INTO "horarios" VALUES ('18:30','false',50,'','',10,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',51,0,0,1,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',52,'','',2,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',53,'','',3,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',54,'','',4,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',55,'','',5,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',56,'','',6,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',57,'','',7,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',58,'','',8,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',59,'','',9,NULL);
INSERT INTO "horarios" VALUES ('19:00','false',60,'','',10,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',61,'','',1,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',62,'','',2,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',63,'','',3,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',64,'','',4,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',65,'','',5,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',66,'','',6,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',67,'','',7,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',68,'','',8,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',69,'','',9,NULL);
INSERT INTO "horarios" VALUES ('19:30','false',70,'','',10,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',71,'','',1,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',72,'','',2,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',73,'','',3,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',74,'','',4,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',75,'','',5,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',76,'','',6,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',77,'','',7,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',78,'','',8,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',79,'','',9,NULL);
INSERT INTO "horarios" VALUES ('20:00','false',80,'','',10,NULL);
COMMIT;
