DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS blog;
DROP TABLE IF EXISTS comment;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE blog (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username_id INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  FOREIGN KEY (username_id) REFERENCES user (id)
);

CREATE TABLE comment (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username_id INTEGER NOT NULL,
  blog_id INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  FOREIGN KEY (username_id) REFERENCES user (id),
  FOREIGN KEY (blog_id) REFERENCES blog (id)
);