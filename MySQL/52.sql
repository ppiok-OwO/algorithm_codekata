SELECT A.FLAVOR
FROM (
    SELECT FH.FLAVOR, FH.TOTAL_ORDER, II.INGREDIENT_TYPE
    FROM FIRST_HALF AS FH
    LEFT JOIN ICECREAM_INFO AS II
    ON FH.FLAVOR = II.FLAVOR
) AS A
WHERE A.TOTAL_ORDER > 3000 
  AND A.INGREDIENT_TYPE = 'fruit_based'
ORDER BY A.TOTAL_ORDER DESC;