-- migrate:up
CREATE TABLE subscribes(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id int NULL,
    product_id int NOT NULL,
    quantity int NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_orders FOREIGN KEY (order_id) REFERENCES orders(id),
    CONSTRAINT fk_products FOREIGN KEY (product_id) REFERENCES orders(id)
    )

-- migrate:down
DROP TABLE subscribes;

