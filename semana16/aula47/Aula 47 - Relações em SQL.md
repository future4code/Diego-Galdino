select * from Movie,Actor;
select * from Rating;
select * from MovieCast;

### Exercicio 1
a) Chave estrangeira é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. 

 b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY, 
	comment TEXT NOT NULL, 
	rate FLOAT NOT NULL, 
	movie_id VARCHAR(255),
	FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001","Bom!",	8,"001");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("002","Muito fraco",	4,"002");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("003","Fraco!",	6,"003");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("004","Muito bom!",	9,"004");
```

c)não existe um id valido na chave estrangeira. Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-diego-galdino`.`Rating`,  CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("005","Muito bom!",	9,"010");
```
#d)
```
ALTER TABLE Movie DROP COLUMN rating;
```
e) Gera um erro que não posso excluir pois existem dados que depende delete

### Exercicio 2
```
CREATE TABLE MovieCast (movie_id VARCHAR(255), actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
a) é uma tabela intermediaria onde sera utilizada para guardar os filmes juntamente com seus atores

b)
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"001", "001");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"001", "004");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"002", "005");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"002", "003");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"003", "004");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"003", "005");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(	"004", "003");
```
d)Gera um erro que não posso excluir pois existem dados que depende delete
### Exercicio 3
a) o operador ON busca os campos onde o Movie.id seja igual Rating.movie_id

b)
```
SELECT m.id, m.title, r.rate FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```
### Exercicio 4
a)
```
SELECT m.id, m.title, r.rate, r.comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```
b)
```
SELECT m.id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```
c)
```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```
### Exercicio 5

```
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
a) porque usando o JOIN evitamos dados duplicado e tabelas embaralhadas

b)
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
c)
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name, r.rate, r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
