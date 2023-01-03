-- migrate:up
ALTER TABLE carts add kakao_id bigint null AFTER user_id;

-- migrate:down
DROP TABLE carts;
