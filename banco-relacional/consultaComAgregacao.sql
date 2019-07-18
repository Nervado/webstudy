SELECT  
    regiao AS 'Região',
    sum(popupalacao) AS Total
FROM `estados`
GROUP BY regiao
ORDER BY Total desc


select 
    avg(popupalacao) as total
from `estados`