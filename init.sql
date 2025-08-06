CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) not null,
    password VARCHAR(255) not null,
    created_at TIMESTAMP DEFAULT NOW(),
    role VARCHAR(255) not null,
    first_name VARCHAR(50) not null,
    second_name VARCHAR(50) not null,
    phone_number VARCHAR(20) not null,
    apartment_id INTEGER,
    community_id INTEGER
);

INSERT INTO users (email, password, role, first_name, second_name, phone_number, apartment_id, community_id)
VALUES ('user@example.com', '123', 'user', 'Jan', 'Kowalski', '+48123456789'),
       ('admin@example.com', '123', 'admin', 'admin', 'admin', '+48123456789', NULL, 1);
