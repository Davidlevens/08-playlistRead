DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("runnin' with the devil", "van halen", "rock");

INSERT INTO songs (title, artist, genre)
VALUES ("down incognito", "winger", "rock");

INSERT INTO songs (title, artist, genre)
VALUES ("feelin' that way", "journey", "rock");

INSERT INTO songs (title, artist, genre)
VALUES ("end game", "taylor swift", "pop");

SELECT * FROM songs;


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);