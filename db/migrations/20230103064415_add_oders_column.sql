-- migrate:up
ALTER TABLE orders ADD product_id int NULL;
ALTER TABLE orders ADD quantity int NULL;

-- migrate:down
DROP TABLE orders;
