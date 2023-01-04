-- migrate:up
ALTER TABLE orders ADD CONSTRAINT fk_orders_products_id FOREIGN KEY (product_id) REFERENCES products(id)

-- migrate:down
DROP TABLE orders;
