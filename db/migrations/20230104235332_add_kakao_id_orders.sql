-- migrate:up
ALTER TABLE orders add kakao_id bigint null AFTER user_id;

-- migrate:down
DROP TABLE orders;
