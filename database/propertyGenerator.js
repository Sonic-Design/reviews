const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const NumOfRecords = 10_000;

const writePropertyListings = (startIndex, endIndex) => {
  let records = [];
  for (let i = startIndex; i <= endIndex; i++) {
    records.push({
      property_id: i,
      average_rating: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      review_count: (Math.random() * (5 - 3) + 3).toFixed(0),
      cleanliness: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      accuracy: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      communication: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      location: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      check_in: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      value: (Math.random() * (5.01 - 1) + 1).toFixed(1),
    })
  }
  return records;
}

const csvWriter = createCsvWriter({
    path: '/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/properties.csv',
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

async function writeListings(n) {
  const currentChunk = Math.floor(n / 100);
  console.log('Chunk count: ', currentChunk);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing property-listing chunk: ${i + 1}`);
    const listingDump = writePropertyListings(currentChunk * i, currentChunk * (i + 1) - 1);
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(listingDump);
  }
}

writeListings(NumOfRecords);
