update estados
set nome  = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = 'MA'

update `estados`
set nome = 'Paraná', popupalacao = 11.32
where sigla = 'PR'


select nome, sigla, popupalacao from estados where sigla = 'PR'