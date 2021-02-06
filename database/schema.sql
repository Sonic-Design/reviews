DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

\c reviews

CREATE TABLE IF NOT EXISTS property_listings (
  property_id SERIAL PRIMARY KEY,
  average_rating INTEGER,
  review_count INTEGER,
  avg_cleanliness INTEGER,
  avg_accuracy INTEGER,
  avg_communication INTEGER,
  avg_location INTEGER,
  avg_check_in INTEGER,
  avg_value INTEGER
);

CREATE TABLE IF NOT EXISTS review_entry (
  review_id SERIAL PRIMARY KEY,
  listing_id INTEGER REFERENCES property_listings (property_id),
  user_id INTEGER REFERENCES user_base(user_id),
  comment VARCHAR(180),
  comment_timestamp VARCHAR(15),
  cleanliness INTEGER,
  accuracy INTEGER,
  communication INTEGER,
  location_value INTEGER,
  check_in INTEGER,
  stay_value INTEGER
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
