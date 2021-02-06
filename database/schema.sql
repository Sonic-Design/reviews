DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

\c reviews

CREATE TABLE IF NOT EXISTS list_of_data (
  list_id SERIAL PRIMARY KEY,
  average_rating INTEGER,
  review_count INTEGER,
  ratings_id INTEGER,
);

CREATE TABLE IF NOT EXISTS list_of_reviews (
  review_id SERIAL PRIMARY KEY,
  listing_id INTEGER,
  user_id INTEGER,
  comment VARCHAR(180),
  comment_timestamp DATE,
  owner_id INTEGER,
  owner_comment VARCHAR(180),
  owner_comment_timestamp DATE,
);

CREATE TABLE IF NOT EXISTS user_base (
  user_id SERIAL PRIMARY KEY,
  profile_picture VARCHAR(150),
  user_name VARCHAR(16),
  is_owner BOOLEAN,
  user_password VARCHAR(25),
);