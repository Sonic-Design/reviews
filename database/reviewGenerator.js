const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const numberOfProperties = 10_000;

const writeReviews = (startIndex, endIndex) => {
  let records = [];
  for (let i = startIndex; i <= endIndex; i++) {
    const amountOfReviews = Math.random() * (18 - 15) + 15;
    for (let j = 0; j < amountOfReviews; j++) {
      records.push({
        property_id: i,
        review_id: j,
        user_id: Math.floor(Math.random() * (200000 - 1) + 1),
        comment: faker.lorem.sentences(),
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
  return records
}

const csvWriter = createCsvWriter({
    path: path.join('/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/reviews.csv'),
    header: [
      {id: 'property_id', title: 'PROPERTY ID'},
      {id: 'review_id', title: 'REVIEW ID'},
      {id: 'user_id', title: 'USER ID'},
      {id: 'comment', title: 'COMMENT'},
      {id: 'comment_timestamp', title: 'COMMENT TIMESTAMP'},
      {id: 'cleanliness', title: 'CLEANLINESS'},
      {id: 'accuracy', title: 'ACCURACY'},
      {id: 'communication', title: 'COMMUNICATION'},
      {id: 'location', title: 'LOCATION'},
      {id: 'check_in', title: 'CHECK IN'},
      {id: 'value', title: 'VALUE'},
    ]
});

async function writeListings(n) {
  const currentChunk = Math.floor(n / 100);
  console.log('Chunk count: ', currentChunk);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing reviews chunk: ${i + 1}`);
    const listingDump = writeReviews(currentChunk * i, currentChunk * (i + 1) - 1);
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(listingDump);
  }
}

writeListings(numberOfProperties);