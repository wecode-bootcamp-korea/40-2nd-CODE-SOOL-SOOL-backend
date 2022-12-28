-- migrate:up
CREATE TABLE carts(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id int NULL,
    product_id int NOT NULL,
    quantity int NULL,
    total_price decimal(10,2),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_products_carts FOREIGN KEY (product_id) REFERENCES products(id)
    )

-- migrate:down
DROP TABLE carts;

