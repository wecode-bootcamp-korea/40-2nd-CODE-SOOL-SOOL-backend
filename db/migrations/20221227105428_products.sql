-- migrate:up
CREATE TABLE products(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    price decimal(10,2),
    capacity varchar(100) NOT NULL,
    image_url varchar(1000) NULL,
    description varchar(200) NULL,
    expiration_date datetime,
    alcohol decimal(10,1),
    product_type_id int NULL,
    sparkling_volume_id int NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_product_types FOREIGN KEY (product_type_id) REFERENCES product_types(id),
    CONSTRAINT fk_sparkling_volumes FOREIGN KEY (sparkling_volume_id) REFERENCES sparkling_volumes(id)
    
    )

-- migrate:down
DROP TABLE products;

