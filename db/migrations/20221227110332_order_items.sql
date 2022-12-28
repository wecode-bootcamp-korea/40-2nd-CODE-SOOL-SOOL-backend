-- migrate:up
CREATE TABLE order_items(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id int NOT NULL,
    product_id int NOT NULL,
    order_id int NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_order_items FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_products_order_items FOREIGN KEY (product_id) REFERENCES products(id)
    )

-- migrate:down
DROP TABLE order_items;

