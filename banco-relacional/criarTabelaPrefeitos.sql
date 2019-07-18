create table if not exists prefeitos (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id), -- relacao 1 x 1
    foreign key (cidade_id) references cidades (id)
);

-- O dado prefeito poderia estar na tabela cidade
-- Por questoes de desepenho é possivel juntar em uma mesma tabela
-- Dependendo dos requisitos do sistema isso pode ser uma opcao ou nao
