CREATE TABLE users
(
    id integer NOT NULL ,
    name text NOT NULL,
    email text NOT NULL UNIQUE,
	password text NOT NULL,
    CONSTRAINT pk_urls PRIMARY KEY (id)
);

CREATE TABLE sessions
(
   id integer NOT NULL ,
   token TEXT NOT NULL UNIQUE,
   id_user INTEGER NOT NULL REFERENCES users(id),
	CONSTRAINT pk_sessions PRIMARY KEY (id)
);

CREATE TABLE urls
(
    id integer NOT NULL ,
    url text NOT NULL,
    "urlShorty" text NOT NULL,
	count_visit INTEGER NOT NULL DEFAULT 0,
	id_user INTEGER REFERENCES users(id),
    CONSTRAINT pk_urls PRIMARY KEY (id)
);

