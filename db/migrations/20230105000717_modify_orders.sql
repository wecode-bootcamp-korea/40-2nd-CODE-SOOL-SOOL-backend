-- migrate:up
ALTER TABLE orders MODIFY user_id bigint NULL;

-- migrate:down
