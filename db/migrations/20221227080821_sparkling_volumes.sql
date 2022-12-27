-- migrate:up
CREATE TABLE sparkling_volumes(
  id int not null auto_increment primary key,
  volume varchar(20) unique
)

-- migrate:down
DROP TABLE sparkling_volumes;
