select 
    e.nome as Estado, 
    c.nome as Cidade, r
    egiao as 'Região' 
from estados e, cidades c
where e.id = c.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id

-- Tipos de Joins
-- São operacoes com conjuntos... interseccões e etc
-- Inner sao as interceptions
-- outer esta fora da interseccao 
-- left Join ou left outer join A + A Intersecao B
-- right join our right outer join A interseccao B + B
-- full join A U B (não suportado pelo mySql)
