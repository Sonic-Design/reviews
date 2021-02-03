const faker = require('faker');

const db = require('./database/index.js');

const seed = [];

for (let i = 1; i <= 100; i += 1) {
  const listing = {
    _id: i,
    averageRating: null,
    reviewCount: Math.floor(Math.random() * (50 - 10 + 1) + 10),
    ratings: [
      ['Cleanliness', (Math.random() * (5.01 - 3) + 3).toFixed(1)],
      ['Accuracy', (Math.random() * (5.01 - 3) + 3).toFixed(1)],
      ['Communication', (Math.random() * (5.01 - 3) + 3).toFixed(1)],
      ['Location', (Math.random() * (5.01 - 3) + 3).toFixed(1)],
      ['Check-in', (Math.random() * (5.01 - 3) + 3).toFixed(1)],
      ['Value', (Math.random() * (5.01 - 3) + 3).toFixed(1)],
    ],
    reviews: [],
  };

  const lr = listing.ratings;
  const sum = Number(lr[0][1]) + Number(lr[1][1]) + Number(lr[2][1])
    + Number(lr[3][1]) + Number(lr[4][1]) + Number(lr[5][1]);
  const ratingCategories = 6;

  const average = (sum / ratingCategories).toFixed(2);
  listing.averageRating = average;

  const month = {
    12: 'January',
    11: 'February',
    10: 'March',
    9: 'April',
    8: 'May',
    7: 'June',
    6: 'July',
    5: 'August',
    4: 'September',
    3: 'October',
    2: 'November',
    1: 'December',
  };

  const sex = () => {
    if (Math.random() < 0.5) {
      return 1;
    }
    return 0;
  };

  const picture = (gender) => `https://airbnbfec.s3-us-west-1.amazonaws.com/${gender}/${Math.floor(Math.random() * (40 - 1 + 1) + 1)}.webp`;

  const ownerGender = sex();
  const ownerProfilePicture = picture(ownerGender);
  const ownerName = faker.name.firstName(ownerGender);

  for (let j = 1; j <= listing.reviewCount; j += 1) {
    const date = `${j < 13 ? month[j] : 'January'} ${j < 13 ? 2020 : 2019}`;
    const gender = sex();
    const name = faker.name.firstName(gender);
    const profilePicture = picture(gender);
    const ownerComment = Math.random() < 0.2 ? faker.lorem.sentences() : null;

    listing.reviews.push({
      _id: j,
      profilePicture,
      name,
      date,
      comment: faker.lorem.sentences(),
      ownerProfilePicture: ownerComment ? ownerProfilePicture : null,
      ownerName: ownerComment ? ownerName : null,
      ownerCommentDate: ownerComment ? date : null,
      ownerComment,
    });
  }

  seed.push(listing);
}

db.Review.insertMany(seed, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    db.connection.close();
  }
});
