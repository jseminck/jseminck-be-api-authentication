# jseminck-be-api-authentication

[![Build Status](https://travis-ci.org/jseminck/jseminck-be-api-authentication.svg?branch=master)](https://travis-ci.org/jseminck/jseminck-be-api-authentication)  [![Coverage Status](https://coveralls.io/repos/github/jseminck/jseminck-be-api-authentication/badge.svg?branch=master)](https://coveralls.io/github/jseminck/jseminck-be-api-authentication?branch=master)   [![Dependency Status](https://david-dm.org/jseminck/jseminck-be-api-authentication.svg)](https://david-dm.org/jseminck/jseminck-be-api-authentication)   [![Code Climate](https://codeclimate.com/github/jseminck/jseminck-be-api-authentication/badges/gpa.svg)](https://codeclimate.com/github/jseminck/jseminck-be-api-authentication)

API for authentication with jSeminck.BE microservices.

## API

### POST /api/login

Verify username and password, and receive a token which can be used for further verification.

POST body should be:
```js
{
    "username": "myUsername",
    "password": "myPassword"
}
```

When a correct username and password combination is provided, the response will look like:
```js
{
  "success": true,
  "message": "You have been logged in!",
  "username": "myUsername",
  "token": "someToken"
}
```

When a correct username but incorrect password is provided, the response will look like:
```js
{
  "success": false,
  "message": "Incorrect password",
  "errorFields": [
    "password"
  ]
}
```

When an incorrect username (and therefor, also an incorrect password) is provided, the response will look like:
```js
{
  "success": false,
  "message": "User has not been found.",
  "errorFields": [
    "username",
    "password"
  ]
}
```

### GET /api/login/verify
Requires `?token=` or `?key=` query parameter or it will return the following error:
```
{
  "success": false,
  "message": "Please provide a key: ?key= or ?token="
}
```

When providing a correct key it returns:
```js
{
  "success": true
}
```

When providing an incorrect key (or a key that has already been expired) it returns:
```
{
  "success": false,
  "message": "Incorrect key"
}
```
