const path = require('path');
const faker = require('faker');
const NumberOfRecords = 1000000;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: path.join('/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/ratings.csv'),
    header: [
      {id: 'ratings_id', title: 'RAITNGS ID'},
      {id: 'cleanliness', title: 'CLEANLINESS'},
      {id: 'accuracy', title: 'ACCURACY'},
      {id: 'communication', title: 'COMMUNICATION'},
      {id: 'location', title: 'LOCATION'},
      {id: 'check_in', title: 'CHECK IN'},
      {id: 'value', title: 'VALUE'},

    ]
});

const records = [];

for (let i = 0; i < NumberOfRecords; i++) {
  records.push({
    ratings_id: i,
    cleanliness: (Math.random() * (5 - 1) + 1).toFixed(2),
    accuracy: (Math.random() * (5 - 1) + 1).toFixed(2),
    communication: (Math.random() * (5 - 1) + 1).toFixed(2),
    location: (Math.random() * (5 - 1) + 1).toFixed(2),
    check_in: (Math.random() * (5 - 1) + 1).toFixed(2),
    value: (Math.random() * (5 - 1) + 1).toFixed(2),
  })
}

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
