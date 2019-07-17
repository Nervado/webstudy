select * from estados

select nome, sigla from estados

select 
    sigla,
    nome as 'Nome do Estado' 
from estados
where regiao = 'Sul'

select 
    nome, 
    regiao,
    popupalacao 
from estados
where popupalacao >= 10
order by popupalacao desc