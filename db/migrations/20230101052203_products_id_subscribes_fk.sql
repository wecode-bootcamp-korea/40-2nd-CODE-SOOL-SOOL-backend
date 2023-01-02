-- migrate:up
ALTER TABLE subscribes ADD CONSTRAINT fk_subscribes_products_id FOREIGN KEY (product_id) REFERENCES products(id)

-- migrate:down
DROP TABLE subscribes;