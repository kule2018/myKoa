# myKoa

## start

```
npm i
npm run watch
```

## curl test

- curl -v http://localhost:9050/user
- curl -v http://localhost:9050/user?userId=1
- curl -v http://localhost:9050/user -d "userId=test&userName=test&avatar=test&score=0"
- curl -v -X DELETE http://localhost:9050/user?userId=test

## typeorm cli

- npx ts-node node_modules/.bin/typeorm schema:sync -c game
- npx ts-node ./node_modules/.bin/typeorm migration:generate -n modify -c game
- npx ts-node ./node_modules/.bin/typeorm migration:run -c game

## SQL

### SQL SELECT 语法

- SELECT column_name,column_name FROM table_name;
- SELECT DISTINCT column_name,column_name FROM table_name;  DISTINCT 关键词用于返回唯一不同的值。
- SELECT column_name,column_name FROM table_name WHERE column_name operator value;


运算符 | 描述
------- | -------
= | 等于
<> | 不等于。注释：在 SQL 的一些版本中，该操作符可被写成 !=
> | 大于
< | 小于
>= | 大于等于
<= | 小于等于
BETWEEN | 在某个范围内
LIKE | 搜索某种模式
IN | 指定针对某个列的多个可能值

### SQL AND & OR 运算符

如果第一个条件和第二个条件都成立，则 AND 运算符显示一条记录。

如果第一个条件和第二个条件中只要有一个成立，则 OR 运算符显示一条记录。

### SQL ORDER BY 关键字

ORDER BY 关键字用于对结果集按照一个列或者多个列进行排序。

ORDER BY 关键字默认按照升序对记录进行排序。如果需要按照降序对记录进行排序，您可以使用 DESC 关键字。

SELECT column_name,column_name FROM table_name ORDER BY column_name,column_name ASC|DESC;

### SQL INSERT INTO 语句

INSERT INTO table_name VALUES (value1,value2,value3,...);

INSERT INTO table_name (column1,column2,column3,...)
VALUES (value1,value2,value3,...);

### SQL UPDATE 语句

UPDATE table_name SET column1=value1,column2=value2,... WHERE some_column=some_value;

**请注意 SQL UPDATE 语句中的 WHERE 子句！
WHERE 子句规定哪条记录或者哪些记录需要更新。如果您省略了 WHERE 子句，所有的记录都将被更新！**

### SQL DELETE 语句

DELETE FROM table_name WHERE some_column=some_value;

您可以在不删除表的情况下，删除表中所有的行。这意味着表结构、属性、索引将保持不变：

DELETE FROM table_name;

DELETE * FROM table_name;

### SQL LIKE 语法

SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern;

**提示："%" 符号用于在模式的前后定义通配符（缺省字母）。**

### SQL CREATE DATABASE 语句

CREATE DATABASE dbname;

### SQL CREATE TABLE 语句

CREATE TABLE 语句用于创建数据库中的表。

表由行和列组成，每个表都必须有个表名。

CREATE TABLE table_name
(
column_name1 data_type(size),
column_name2 data_type(size),
column_name3 data_type(size),
....
);

### DROP TABLE 语句

DROP TABLE table_name

### DROP DATABASE 语句

DROP DATABASE database_name

如果我们仅仅需要删除表内的数据，但并不删除表本身，那么我们该如何做呢？

请使用 TRUNCATE TABLE 语句：

TRUNCATE TABLE table_name

### ALTER TABLE 语句

ALTER TABLE 语句用于在已有的表中添加、删除或修改列。

- 如需在表中添加列，请使用下面的语法:

ALTER TABLE table_name ADD column_name datatype

- 如需删除表中的列，请使用下面的语法（请注意，某些数据库系统不允许这种在数据库表中删除列的方式）：

ALTER TABLE table_name DROP COLUMN column_name