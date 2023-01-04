-- migrate:up
ALTER TABLE orders ADD CONSTRAINT kakao_id FOREIGN KEY (kakao_id) references users(kakao_id);

-- migrate:down
DROP TABLE orders;
