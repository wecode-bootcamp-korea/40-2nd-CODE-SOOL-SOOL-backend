-- migrate:up
CREATE TABLE orders(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id int NOT NULL,
    message varchar(300),
    address varchar(500),
    total_price decimal(10,2),
    order_status_id int NULL,
    subscribe_id int NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_order_status FOREIGN KEY (order_status_id) REFERENCES order_status(id)
    )

-- migrate:down
DROP TABLE orders;
