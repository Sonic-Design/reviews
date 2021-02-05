# Project Name

> HouseHub is a space to rent houses.

## Related Projects

  - https://github.com/The-Casuals/photo_gallery
  - https://github.com/The-Casuals/casual-checkout-service
  - https://github.com/The-Casuals/reviews
  - https://github.com/The-Casuals/photo_carousel

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#api)

## Usage

> npm run seed to seed the database
> npm run watch to build webpack and watch
> npm run start to start the server

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 14.15.4

## Development

### Installing Dependencies

> npm i to install dependencies

## API

Getting all the reviews
`GET /api/reviews/:id`

Path Parameters:
  * id - an id to determine what listing (set of reviews) to grab from

Return: Array of review objects

```
{
  "ratings": [
    ["Cleanliness", Number],
    ["Accuracy", Number],
    ["Communication", Number],
    ["Location", Number],
    ["Check-in", Number],
    ["Value", Number]
  ],
  "reviews": [
        {
            "_id": Number,
            "profilePicture": String,
            "user_id": Number,
            "name": String,
            "date": Date,
            "comment": String,
            "ownerProfilePicture":  String || null,
            "ownerName": String || null,
            "ownerCommentDate": Date || null,
            "ownerComment": String || null
        }, ...
  ],
  "_id": Number,
  "averageRating": Number,
  "reviewCount": Number,
}
```

# Adding a review
`POST /api/reviews/:id`

Status Code: `201`

Request body: Expects a JSON object as shown below:
 ```
 {
    "profilePicture": String,
    "name": String,
    "user_id": Number,
    "date": Date,
    "comment": String,
    "ownerProfilePicture":  String || null,
    "ownerName": String || null,
    "ownerCommentDate": Date || null,
    "ownerComment": String || null
}
 ```

 Sample Response(s):
 ```
  {
    "status": 201,
    "message": "succesfully added review"
  }
 ```
 ```
  {
    "status": 400,
    "message": "failed to add review"
  }
 ```

 # Editing a review

 `PUT /api/reviews/:id/entry/:entryId`

 Status Code: `200`

Request Parameters:
  * :id specifies which listing
  * :entryId specifies what review to look into in the array of reviews

Request body: Expects a JSON object as shown below

```
{
    "_id": Number,
    "profilePicture": String,
    "name": String,
    "user_id": Number,
    "date": Date,
    "comment": String,
}
```
 Sample Response(s):
 ```
  {
    "status": 200,
    "message": "succesfully edited review"
  }
 ```
 ```
  {
    "status": 400,
    "message": "failed to edit review"
  }
 ```

# Deleting a review

`DELETE /api/reviews/:id/entry/:entryId`

Status Code: `200`

Request Parameters:
  * :id specifies which listing
  * :entryId specifies what review to look into in the array of reviews

Request Body: `None`

 Sample Response(s):
 ```
  {
    "status": 200,
    "message": "succesfully deleted review"
  }
 ```
 ```
  {
    "status": 400,
    "message": "failed to delete review"
  }
 ```