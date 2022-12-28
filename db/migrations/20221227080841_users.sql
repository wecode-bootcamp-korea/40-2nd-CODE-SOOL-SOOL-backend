-- migrate:up
CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    kakao_id bigint NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    profile_image  VARCHAR(500) NULL,
    password VARCHAR(200) NULL,
    address VARCHAR(200) NULL,
    point DECIMAL(10,2) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

-- migrate:down
DROP TABLE users;
