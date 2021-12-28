CREATE TABLE necklaces (
    id serial PRIMARY KEY, 
    description TEXT NOT NULL,
    length INTEGER,
    price INTEGER NOT NULL
);

INSERT INTO necklaces
VALUES (
    1,
    'first description',
    18,
    68
);