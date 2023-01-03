-- migrate:up
ALTER TABLE users MODIFY kakao_id bigint NULL UNIQUE;

-- migrate:down
DROP TABLE users;