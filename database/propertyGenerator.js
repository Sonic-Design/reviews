const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const NumOfRecords = 10_000_000;

const writePropertyListings = (AmountOfRecords) => {
  let records = [];
  for (let i = 0; i < AmountOfRecords; i++) {
    records.push({
      property_id: i,
      average_rating: (Math.random() * (5.01 - 1) + 1).toFixed(1),
      review_count: (Math.random() * (20 - 16) + 16),
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
    path: path.join('/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/properties.csv'),
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

csvWriter.writeRecords(writePropertyListings(NumOfRecords))       // returns a promise
    .then(() => {
        console.log('...property listings generated');
    });
