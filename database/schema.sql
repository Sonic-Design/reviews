DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

\c reviews

CREATE TABLE IF NOT EXISTS list_of_reviews (
  reviews_id SERIAL PRIMARY KEY,
  cleanliness INTEGER,
  accuracy INTEGER,
  communication INTEGER,
  location INTEGER,
  check_in INTEGER,
  value INTEGER
  average_rating INTEGER,
  review_count INTEGER,
  ratings_id INTEGER,
);

CREATE TABLE IF NOT EXISTS review_entry (
  review_id SERIAL PRIMARY KEY,
  listing_id INTEGER REFERENCES list_of_reviews (reviews_id),
  user_id INTEGER REFERENCES user_base(user_id),
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

CREATE TABLE IF NOT EXISTS review_ratings (
  rating_id SERIAL PRiMARY KEY,
  review_ratings_id INTEGER REFERENCES list_of_reviews(reviews_id),
  cleanliness INTEGER,
  accuracy INTEGER,
  communication INTEGER,
  location INTEGER,
  check_in INTEGER,
  value INTEGER
)