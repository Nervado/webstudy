CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT unsigned not null,
    area decimal (10,2),
    primary key (id),
    foreign key (estado_id) references estados(id)
);


-- DROP TABLE IF EXISTS teste;