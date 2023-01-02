-- migrate:up
CREATE TABLE product_types(
  id int not null auto_increment primary key,
  type varchar(100) unique
)

-- migrate:down
DROP TABLE product_types;
