### Exercício 1
```
CREATE TABLE Actor (
    id 			VARCHAR(255) PRIMARY KEY,
    name 		VARCHAR (255) NOT NULL,
    salary 		FLOAT NOT NULL,
    birth_date 	DATE NOT NULL,
	gender 		VARCHAR(6) NOT NULL
);
```
a) Varchar recebe uma string de quantidade limitada, date uma data e hora, PRIMARY KEY é a chave primaria da tabela e not null é não pode ser vazio.
b) Exibe uma lista de bancos ja criados e uma lista de tabelas criadas
c) Exibe a tabela que foi criada recentemente
```
describe Actor;
```
### Exercício 2
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```
a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) Erro 1062 significa que você tentou inserir dados que já existentes para uma chave única .
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
c)Erro 1136 a quantidade de coluna que esta sendo passada como parametro não é a esperada
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
D) Erro 1364 o campo name precisa de um valor não pode ser nulo
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
E) Erro 1292 o campo data nascimento esperava uma data do tipo date e recebeu um valor sem ""
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

```

### Exercício 3
a)
```
SELECT * from Actor WHERE gender = "female";
```
b)
```
SELECT salary FROM Actor WHERE name like "Tony Ramos";
```
c) Não retornou nenhum valor
```
SELECT * from Actor WHERE gender = "invalid";
```
d)
```
SELECT id,name,salary from Actor WHERE salary<500000;
```


e)erro 1054 desconhece "nome" na lista de campos
```
SELECT id, name from Actor WHERE id = "002";
```
### Exercicio 4
a) retorna todos os campos da tabela actor onde no campo name comece com a letra A maiuscula ou J maiusculo e com salario maior de  300000

b)
```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```
C)
```
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
```
D)
```
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary between 350000 and 900000;
```
## Exercicio 5
a)
```
CREATE TABLE Movie (
	id 			 VARCHAR(255) PRIMARY KEY,
    title 		 VARCHAR(255) NOT NULL UNIQUE,
    synopsis 	 TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating 		 INT NOT NULL
);
```
b)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```
c)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```


d)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```
e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```
## Exercicio 6 
a)
```
SELECT id, title, rating FROM Movie WHERE id=1;
```


b)
```
SELECT * FROM Movie WHERE title LIKE "Se Eu Fosse Você";
```


c)
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```


## Exercicio 7
a)
```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```

 
b)
```
SELECT * FROM Movie WHERE title LIKE "%Deus%" OR synopsis LIKE "%professora%";
```


c)
```
SELECT * FROM Movie WHERE release_Date < "2016-06-01";
```

 
d)
```
SELECT * FROM Movie WHERE release_Date < "2016-05-04" AND (title LIKE "%Deus%" OR synopsis LIKE "%professora%") AND rating > 7;
```

