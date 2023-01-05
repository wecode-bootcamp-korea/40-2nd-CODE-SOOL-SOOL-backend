-- migrate:up
ALTER TABLE orders ADD CONSTRAINT cart_id FOREIGN KEY (cart_id) references carts(id);


-- migrate:down

