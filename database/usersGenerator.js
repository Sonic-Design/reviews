const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const NumberOfUsers = 200000;


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

const generateUsers = (startIndex, endIndex) => {
  let userBase = [];
  for (let i = startIndex; i <= endIndex; i++) {
    userBase.push({
      user_id: i,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      profile_picture: faker.image.people(),
      username: faker.internet.userName(),
      user_password: faker.internet.password(),
      user_email: faker.internet.email(),
    })
  }
  return userBase;
}

async function writeListings(n) {
  const currentChunk = Math.floor(n / 100);
  console.log('Chunk count: ', currentChunk);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 100; ++i) {
    console.log(`Processing users chunk: ${i + 1}`);
    const listingDump = generateUsers(currentChunk * i, currentChunk * (i + 1) - 1);
    // eslint-disable-next-line no-await-in-loop
    await csvWriter.writeRecords(listingDump);
  }
}

writeListings(NumberOfUsers);