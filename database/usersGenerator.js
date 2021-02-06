const path = require('path');
const faker = require('faker');
const NumberOfRecords = 1000000;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: path.join('/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/users.csv'),
    header: [
      {id: 'user_id', title: 'USER ID'},
      {id: 'username', title: 'USERNAME'},
      {id: 'profile_picture', title: 'PROFILE PICTURE'},
      {id: 'user_password', title: 'USER PASSWORD'},
    ]
});

const records = [];

for (let i = 0; i < NumberOfRecords; i++) {
  records.push({
    user_id: i,
    username: faker.name.findName(),
    profile_picture: faker.image.people(),
    user_password: faker.internet.password(),
  })
}

csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
