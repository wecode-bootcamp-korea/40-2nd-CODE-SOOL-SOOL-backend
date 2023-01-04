-- migrate:up
alter table order_items modify user_id int null;
alter table order_items modify order_id int null;
alter table order_items add quantity int null after product_id;
alter table order_items add total_price decimal(10,2) null after quantity;
-- migrate:down

