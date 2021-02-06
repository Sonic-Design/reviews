const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const NumberOfProperties = 1000000;
const records = [];
for (let i = 0; i < NumberOfProperties; i++) {
  const amountOfReviews = Math.random() * (18 - 15) + 15;
  for (let j = 0; j < amountOfReviews; j++) {
    records.push({
      review_id: j,
      property_id: i,
      user_id: Math.random() * (200000 - 1) + 1,
      comment: faker.random.words(),
      comment_timestamp: faker.time.recent(),
      cleanliness: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      accuracy: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      communication: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      location: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      check_in: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      value: (Math.random() * (5.01 - 1) + 1).toFixed(1),
    })
  }
}

const csvWriter = createCsvWriter({
    path: path.join('/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/reviews.csv'),
    header: [
      {id: 'property_id', title: 'PROPERTY ID'},
      {id: 'average_rating', title: 'AVERAGE RATING'},
      {id: 'review_count', title: 'REVIEW COUNT'},
      {id: 'cleanliness', title: 'CLEANLINESS'},
      {id: 'accuracy', title: 'ACCURACY'},
      {id: 'communication', title: 'COMMUNICATION'},
      {id: 'location', title: 'LOCATION'},
      {id: 'check_in', title: 'CHECK IN'},
      {id: 'value', title: 'VALUE'},
    ]
});

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...reviews generated');
    });
