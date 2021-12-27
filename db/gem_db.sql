CREATE TABLE necklaces (
    id integer serial PRIMARY KEY, 
    desc TEXT NOT NULL,
    length INTEGER,
    price INTEGER
);

INSERT INTO test_table
VALUES (
    1,
    'hello database'
);