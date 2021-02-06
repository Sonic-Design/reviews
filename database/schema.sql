DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

\c reviews

CREATE TABLE IF NOT EXISTS property_listings (
  property_id SERIAL PRIMARY KEY,
  average_rating SMALLINT,
  review_count SMALLINT,
  avg_cleanliness SMALLINT,
  avg_accuracy SMALLINT,
  avg_communication SMALLINT,
  avg_location SMALLINT,
  avg_check_in SMALLINT,
  avg_value SMALLINT
);

CREATE TABLE IF NOT EXISTS user_base (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(16),
  last_name VARCHAR(16),
  profile_picture VARCHAR(150),
  username VARCHAR(16),
  user_password VARCHAR(25),
  user_email VARCHAR(25),
);

CREATE TABLE IF NOT EXISTS review_entry (
  review_id SERIAL PRIMARY KEY,
  listing_id INTEGER REFERENCES property_listings (property_id),
  user_id INTEGER REFERENCES user_base(user_id),
  comment VARCHAR(180),
  comment_timestamp VARCHAR(15),
  cleanliness SMALLINT,
  accuracy SMALLINT,
  communication SMALLINT,
  location_value SMALLINT,
  check_in SMALLINT,
  stay_value SMALLINT
);

