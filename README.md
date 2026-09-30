# Course Registration System

## Technologies
- Node.js
- Express.js
- REST API
- JavaScript

## Project Structure

course-registration-system/
|
|-- package.json
|-- server.js
|-- README.md
|
`-- src/
    |-- app.js
    |
    |-- data/
    |   `-- store.js
    |
    |-- middleware/
    |   `-- validation.js
    |
    |-- controllers/
    |   |-- courseController.js
    |   `-- registrationController.js
    |
    `-- routes/
        |-- courseRoutes.js
        `-- registrationRoutes.js

## Complete Request Flow

### 1. Application starts

server.js
    |
    v
src/app.js
    |
    +--> express.json()
    |
    +--> /api/courses
    |
    `--> /api/registrations

### 2. Course creation

POST /api/courses
    |
    v
courseRoutes.js
    |
    v
validateCourse middleware
    |
    |-- invalid --> 400 response
    |
    `-- valid
          |
          v
courseController.create
          |
          v
data/store.js
          |
          v
courses Map
          |
          v
201 response

### 3. Get all courses

GET /api/courses
    |
    v
courseRoutes.js
    |
    v
courseController.getAll
    |
    v
courses Map
    |
    v
JSON response

### 4. Get one course

GET /api/courses/CS101
    |
    v
courseRoutes.js
    |
    v
courseController.getOne
    |
    v
courses Map
    |
    +--> found --> course JSON
    |
    `--> missing --> 404 response

### 5. Update a course

PUT /api/courses/CS101
    |
    v
courseRoutes.js
    |
    v
validateCourse
    |
    v
courseController.update
    |
    v
courses Map
    |
    v
updated course JSON

### 6. Delete a course

DELETE /api/courses/CS101
    |
    v
courseRoutes.js
    |
    v
courseController.remove
    |
    v
courses Map
    |
    v
success response

### 7. Student registration

POST /api/registrations
    |
    v
registrationRoutes.js
    |
    v
validateRegistration
    |
    |-- invalid --> 400 response
    |
    `-- valid
          |
          v
registrationController.create
          |
          +--> checks course exists
          |
          v
registrations Map
          |
          v
201 response

### 8. Registration CRUD

GET    /api/registrations
GET    /api/registrations/:id
PUT    /api/registrations/:id
DELETE /api/registrations/:id

All requests enter registrationRoutes.js and then call the
appropriate registrationController method.

## How to Run

1. Open a terminal in the project folder.
2. Run:

npm install

3. Start the server:

npm start

4. Open:

http://localhost:5000

## Example Requests

Create course:

POST /api/courses

{
  "code": "CS101",
  "name": "Web Programming",
  "credits": 4
}

Register student:

POST /api/registrations

{
  "studentId": "S19",
  "courseCode": "CS101"
}

Get courses:

GET /api/courses

Get registrations:

GET /api/registrations

## CRUD Summary

Courses:
- CREATE: POST /api/courses
- READ: GET /api/courses and GET /api/courses/:code
- UPDATE: PUT /api/courses/:code
- DELETE: DELETE /api/courses/:code

Registrations:
- CREATE: POST /api/registrations
- READ: GET /api/registrations and GET /api/registrations/:id
- UPDATE: PUT /api/registrations/:id
- DELETE: DELETE /api/registrations/:id
