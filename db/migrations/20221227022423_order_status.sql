-- migrate:up
CREATE TABLE order_status(
  id int not null auto_increment primary key,
  status varchar(200)
)

-- migrate:down
DROP TABLE order_status;
