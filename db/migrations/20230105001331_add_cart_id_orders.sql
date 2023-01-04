-- migrate:up
ALTER TABLE orders add cart_id bigint NOT NULL AFTER kakao_id;

-- migrate:down

