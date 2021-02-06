const path = require('path');
const faker = require('faker');
const NumberOfUsers = 200000;

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: path.join('/Users/brandonnguyen/Documents/HackReactorStuff/SDC/reviews/database/users.csv'),
    header: [
      {id: 'user_id', title: 'USER ID'},
      {id: 'first_name', title: 'FIRST NAME'},
      {id: 'last_name', title: 'LAST NAME'},
      {id: 'profile_picture', title: 'PROFILE PICTURE'},
      {id: 'username', title: 'USERNAME'},
      {id: 'user_password', title: 'USER PASSWORD'},
      {id: 'user_email', title: 'USER EMAIL'},
    ]
});

const userBase = [];

for (let i = 0; i < NumberOfUsers; i++) {
  userBase.push({
    user_id: i,
    first_name: faker.name.findName(),
    last_name: faker.name.findName(),
    profile_picture: faker.image.people(),
    username: faker.name.findName(),
    user_password: faker.internet.password(),
    user_email: faker.internet.email(),
  })
}

csvWriter.writeRecords(userBase)       // returns a promise
    .then(() => {
        console.log('...users generated');
    });
