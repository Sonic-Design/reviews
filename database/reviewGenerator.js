const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const NumberOfRecords = 1000000;
const records = [];
for (let i = 0; i < NumberOfRecords; i++) {
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
        console.log('...Done');
    });
