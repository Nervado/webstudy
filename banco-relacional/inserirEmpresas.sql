
-- modificar campo da tabela empresas 
alter table empresas modify cnpj varchar(14);

-- comando desc (descriptions of table)
desc empresas;

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 123456789),
    ('Vale',92145378),
    ('Cielo',987456321);

select * from empresas;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1 ,1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);