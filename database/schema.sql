DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

\c reviews

CREATE TABLE IF NOT EXISTS property_listings (
  property_id SERIAL PRIMARY KEY,
  average_rating    DECIMAL,
  review_count      DECIMAL,
  avg_cleanliness   DECIMAL,
  avg_accuracy      DECIMAL,
  avg_communication DECIMAL,
  avg_location      DECIMAL,
  avg_check_in      DECIMAL,
  avg_value         DECIMAL
);

CREATE TABLE IF NOT EXISTS user_base (
  user_id SERIAL PRIMARY KEY,
  first_name       VARCHAR(16),
  last_name        VARCHAR(16),
  profile_picture VARCHAR(150),
  username         VARCHAR(35),
  user_password    VARCHAR(25),
  user_email       VARCHAR(75)
);

CREATE TABLE IF NOT EXISTS review_entry (
  review_id SERIAL PRIMARY KEY,
  property_id INTEGER REFERENCES property_listings (property_id),
  user_id INTEGER REFERENCES user_base(user_id),
  cleanliness            INTEGER NOT NULL,
  accuracy               INTEGER NOT NULL,
  communication          INTEGER NOT NULL,
  location_value         INTEGER NOT NULL,
  check_in               INTEGER NOT NULL,
  stay_value             INTEGER NOT NULL,
  comment          VARCHAR(2000) NOT NULL,
  comment_timestamp VARCHAR(150) NOT NULL
);

\COPY property_listings FROM '/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/properties.csv' WITH CSV HEADER DELIMITER ',';
\COPY user_base FROM '/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/users.csv' WITH CSV HEADER DELIMITER ',';
\COPY review_entry(property_id, user_id, cleanliness, accuracy, communication, location_value, check_in, stay_value, comment, comment_timestamp) FROM '/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/reviews.csv' WITH CSV HEADER DELIMITER ',';

CREATE INDEX review_entry_listing_id_idx ON review_entry (property_id);
CREATE INDEX review_entry_review_id_idx ON review_entry (review_id);