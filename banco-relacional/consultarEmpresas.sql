SELECT * FROM EMPRESAS;
SELECT * FROM EMPRESAS_UNIDADES;
SELECT * FROM CIDADES;

SELECT E.NOME EMPRESA, C.NOME AS CIDADE
FROM EMPRESAS E, EMPRESAS_UNIDADES EU, CIDADES C
WHERE E.ID = EU.EMPRESA_ID AND C.ID = EU.CIDADE_ID
AND SEDE; -- SÓ DEVOLVE EMPRESA QUE FOR SEDE (SEDE = 1)