# API Documentation

#### 1️⃣ Backend delpoyed at [🚫name service here](🚫add URL here) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Backend framework goes here

-    Point One
-    Point Two
-    Point Three
-    Point Four

## 2️⃣ Endpoints

Sign Up & Login:

/api/auth
  POST
  - /signup
  - /login


(For Admins only) User Information:

/api/auth
  GET
  - /users
  POST/PUT/DELETE
  - /users/:id

#### Authorization Routes

| Method | Endpoint                | Access Control | Description            |
| ------ | ----------------------- | -------------- | ---------------------- |
| POST   | `/signup`               | all users      | Allows user to sign up |
| POST   | `/login`                | all users      | Allows user to login   |

#### Admin Routes

| Method | Endpoint                | Access Control      | Description       |
| ------ | ----------------------- | ------------------- | ---------------------- |
| GET    | `/users`                | admins only         | Returns info for users |
| GET    | `/users/:id`            | admins only         | Returns specific user's email, role_id and id     |

| PUT    | `/users/:id`            | admins only         | Edit user's info       |
| DELETE | `/users/:id`            | admins only         | Delete a user          |

# Data Model

🚫This is just an example. Replace this with your data model

#### Users
(Sign Up & Login)
```
{
  id: UUID
  email: STRING
  password: STRING
  role_id: INT
}
```
#### User Profiles
```
{
  id: UUID
  user_id: UUID foreign key in USERS table
  username: STRING
  firstname: STRING
  lastname: STRING
  disability_id: UUID foreign key in DISABILITIES table
  gender_id: UUID foreign key in GENDERS table
  dob: DATE
  bio: STRING
  underage: BOOLEAN
  parent_id: UUID foreign key in USERS table
}
```

#### Genders
```
{
  id: UUID
  genders: STRING
}
```

#### Disabilities
```
{
  id: UUID
  name: STRING
  disability_group_id: UUID foreign key in DISABILITY_GROUPS table
}
```
#### Disability Groups
```
{
  id: UUID
  name: STRING
}
```
#### Roles
```
{
  id: UUID
  name: STRING
}
```
#### Attendee Types
```
{
  id: UUID
  name: STRING
}


## 2️⃣ Actions
USERS

`get()` -> Gets all users

`getBy(filter)` -> Gets specific user by chosen filter

`getById(id)` -> Gets specific user by ID

`add(user)` -> Creates a new user and returns that user

`editUser(changes, id)` -> Updates a single user by ID

`deleteUser(id)` -> Deletes everything dependent on the user

## 3️⃣ Environment Variables

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
