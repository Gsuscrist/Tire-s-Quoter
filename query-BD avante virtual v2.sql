CREATE DATABASE avante;
/*         ELABORATE BY: 
JESUS ANTONIO GORDILLO ORANTES
    ANDRES GUIZAR GOMEZ
  LUIS ADRIAN RUEDA PORTELA  */
USE avante;

CREATE TABLE usuario(
id_usuario INT NOT NULL AUTO_INCREMENT,
email VARCHAR(255),
user_name VARCHAR(255),
contraseña VARCHAR(255),
PRIMARY KEY (id_usuario)
);

INSERT INTO usuario (email, user_name, contraseña)
VALUES('palmas.gerente@avante.com.mx', 'Gerente Palmas', '456921');

CREATE TABLE llanta(
id_llanta INT NOT NULL AUTO_INCREMENT,
marca VARCHAR(255),
modelo VARCHAR(255),
medida VARCHAR(255),
rango_carga INT,
rango_vel VARCHAR(255),
uso VARCHAR(255),
precio DOUBLE,
cantidad INT,
imagen LONGTEXT,
PRIMARY KEY (id_llanta)
);

CREATE TABLE waitlist(
id_waitlist INT NOT NULL AUTO_INCREMENT,
id_llanta INT,
marca VARCHAR(255),
modelo VARCHAR(255),
medida VARCHAR(255),
rango_carga INT,
rango_vel VARCHAR(255),
uso VARCHAR(255),
precio DOUBLE,
cantidad INT,
id_cliente INT,
imagen LONGTEXT,
FOREIGN KEY (id_llanta) REFERENCES llanta(id_llanta),
FOREIGN KEY (id_cliente) REFERENCES usuario(id_usuario),
PRIMARY KEY(id_waitlist)
);

CREATE TABLE wishlist(
id_wishlist INT NOT NULL AUTO_INCREMENT,
id_llanta INT,
marca VARCHAR(255),
modelo VARCHAR(255),
medida VARCHAR(255),
rango_carga INT,
rango_vel VARCHAR(255),
uso VARCHAR(255),
precio DOUBLE,
id_cliente INT,
imagen LONGTEXT,
FOREIGN KEY (id_llanta) REFERENCES llanta(id_llanta),
FOREIGN KEY (id_cliente) REFERENCES usuario(id_usuario),
PRIMARY KEY(id_wishlist)
);

CREATE TABLE mercancia_apartada(
id_merch INT NOT NULL AUTO_INCREMENT,
id_llanta INT,
marca VARCHAR(255),
modelo VARCHAR(255),
medida VARCHAR(255),
rango_carga INT,
rango_vel VARCHAR(255),
uso VARCHAR(255),
precio DOUBLE,
cantidad INT,
id_cliente INT,
imagen LONGTEXT,
FOREIGN KEY (id_llanta) REFERENCES llanta(id_llanta),
FOREIGN KEY (id_cliente) REFERENCES usuario(id_usuario),
PRIMARY KEY(id_merch)
);





INSERT INTO llanta (marca, modelo, medida, rango_carga, rango_vel, uso, precio, cantidad, imagen)
VALUES
('Tornel', 'Classic P', '175/70r13', 82, 'T', 'carretera', 1030.99, 25,'https://http2.mlstatic.com/D_NQ_NP_826280-MLA40817917376_022020-V.webp'),
('Pirelli', 'Scorpion ATR', '275/55r20', 111, 'S', 'mixta', 3179.99, 100,'https://http2.mlstatic.com/D_NQ_NP_681510-MLA32297869164_092019-V.webp'),
('Michelin', 'Energy XM2', '185/60r15', 82, 'H', 'carretera', 2145.00, 159,'https://http2.mlstatic.com/D_NQ_NP_939665-MLA40684237840_022020-V.webp'),
('Zetum', 'KR06', '185/60r14', 82, 'H', 'carretera', 1139.99, 3,'https://http2.mlstatic.com/D_NQ_NP_675212-MLA45498405338_042021-V.webp'),
('Mirage', 'MR-162', '215/70r15', 98, 'H', 'carretera', 1589.99, 17,'https://http2.mlstatic.com/D_NQ_NP_606765-MLA49183194553_022022-V.webp'),
('Firestone', 'Firehawk 900', '195/65r15', 91, 'H', 'carretera', 1785.99, 234,'https://http2.mlstatic.com/D_NQ_NP_675710-MLA32297039708_092019-V.webp'),
('Pirelli', 'Cinturato P1', '195/65r15', 91, 'H', 'carretera', 1840.99, 10,'https://http2.mlstatic.com/D_NQ_NP_787934-MLA45451908350_042021-V.webp'),
('Mirage', 'MR-AT172', '235/75r15', 109, 'S', 'mixta', 2069.99, 56,'https://http2.mlstatic.com/D_NQ_NP_989117-MLA45305383320_032021-V.webp'),
('Firestone', 'Firehawk ATX ST', '265/75r16', 112, 'R', 'terraceria', 3599.99, 78,'https://http2.mlstatic.com/D_NQ_NP_965892-MLA48621916072_122021-V.webp'),
('BFGoodrich', 'All-Terrain', '285/76r16', 126, 'R', 'terraceria', 6930.50, 34,'https://http2.mlstatic.com/D_NQ_NP_766678-MLA46592839842_072021-V.webp'),
('Mickey Thompson', 'Boss A/t', '285/55r20', 122, 'Q', 'terracera', 10030.99, 23,'https://http2.mlstatic.com/D_NQ_NP_791286-MLM49731401552_042022-V.webp'),
('Goodyear', 'Kelly', '175/70r13', 82, 'T', 'carretera', 1115.99, 3,'https://http2.mlstatic.com/D_NQ_NP_766678-MLA46592839842_072021-V.webp'),
('Zetum', 'KR26 P', '185/60r15', 88, 'H', 'carretera', 1400.99, 80,'https://http2.mlstatic.com/D_NQ_NP_823570-MLA45241246440_032021-V.webp'),
('Marshall', 'MH12', '185/65r15', 88, 'H', 'carretera', 1360.99, 28,'https://http2.mlstatic.com/D_NQ_NP_846120-MLA48731495487_012022-V.webp'),
('Hankook', 'Optimo', '195/65r15', 89, 'T', 'carretera', 1570.99, 71,'https://http2.mlstatic.com/D_NQ_NP_844430-MLA43469276494_092020-V.webp'),
('Cooper', 'Cs1', '195/65r15', 91, 'T', 'carretera', 1700.99, 80,'https://http2.mlstatic.com/D_NQ_NP_676956-MLM45597891912_042021-V.webp'),
('Khumo', 'Sense', '175/70r13', 82, 'H', 'carretera', 1145.99, 83,'https://http2.mlstatic.com/D_NQ_NP_827599-MLA44492273854_012021-V.webp'),
('Goodyear', 'Assurance', '175/70r13', 82, 'T', 'carretera', 1311.99, 98,'https://http2.mlstatic.com/D_NQ_NP_752098-MLA48731495529_012022-V.webp'),
('Mirage', 'MR-mt', '31x10.50', 109, 'Q', 'terraceria', 3128.99, 321,'https://http2.mlstatic.com/D_NQ_NP_684808-MLM49970387681_052022-W.webp'),
('Bridgestone', 'Dueler', '245/75r17', 121, 'R', 'terraceria', 6389.99, 5,'https://http2.mlstatic.com/D_NQ_NP_682462-MLM29463886174_022019-W.webp');

INSERT INTO llanta (marca, modelo, medida, rango_carga, rango_vel, uso, precio, cantidad, imagen)
VALUES
('Tornel', ' Real P', '205/55r16', 82, 'T', 'carretera',1667, 12,'https://http2.mlstatic.com/D_NQ_NP_627786-MLA49170389227_022022-O.webp'),
('Cooper', ' CS1', '235/75r15', 105, 'T', 'carretera',2020, 15,'https://http2.mlstatic.com/D_NQ_NP_772848-MLA49643387316_042022-O.webp'),
('Trazans', ' z-107', '185/65r14', 86, 'H', 'carretera',1667, 22,'https://http2.mlstatic.com/D_NQ_NP_954259-MLA49072846419_022022-O.webp');



create view llantas_michelin as select modelo, medida from llanta where marca='Michelin';
create view llantas_pirelli as select modelo, medida from llanta where marca='Pirelli';
create view llantas_r13 as select marca, modelo, precio from llanta where medida='175/70r13';
