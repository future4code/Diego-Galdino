### Exercicio 1
a) retira uma coluna da tabela
```
ALTER TABLE Actor DROP COLUMN salary;
```
b) altera a coluna gender para sex do tipo varchar ate 6 caracteres
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
c)altera o tipo coluna gender o tipo varchar ate 255 caracteres
```
ALTER TABLE Actor CHANGE gender gender VARCHAR();
```
d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercicio 2
a)
```
UPDATE Actor SET name = "Liam Neeson", birth_date="1955-03-03" WHERE id =003;
```
b)
```
UPDATE Actor SET name = "LIAN NEESON" WHERE name = "Liam Neeson";
```
c)
```
UPDATE Actor 
SET name = "Moacyr Franco",birth_date = "2020-06-10", salary = 700000, gender = "male" WHERE id = "050";
```
d) A query é executada porem nenhumas linha é afetada
### Exercicio 3
a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor WHERE	gender = "male" AND	salary > 1000000;
```
### Exercicio 4
a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercicio 5
a) A query retorna a quantidade de pessoas por genero
b)
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor ORDER BY salary;
```
d)
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### Exercicio 6
a)
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c)
```
UPDATE Movie SET playing_limit_date = "2021-01-25" WHERE id = "002";
```
d)
```
DELETE FROM Movie WHERE id = "002";
```

### Exercicio 7
a)
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
b)
```
SELECT AVG(rating) FROM Movie;
```
c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
d)
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
e)
```
SELECT MAX(rating) FROM Movie;
```
f)
```
SELECT MIN(rating) FROM Movie;
```

### Exercicio 8
a)
```
SELECT * FROM Movie ORDER BY title;
```
b)
```
SELECT * FROM Movie ORDER BY title LIMIT 5;
```
c)
```
SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
```
d)
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```