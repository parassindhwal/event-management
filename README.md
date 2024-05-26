# Airtribe Event Management API


This project implements a secure and user-friendly news recommendation system using Node.js, Express.js. It offers:

- *Registration and login*: Secure user authentication with bcrypt for password hashing and JWT for token-based authentication.

- *Event registration*: API used here will give you information about events and let you register.

- *JOI*: Streamlined input validation, reducing errors and improving data integrity.

- *Modular Code*: Organized project structure for easy collaboration and future enhancements.
dotenv and .env: Securely storing environment variables, improving configuration management.

- *Testing and Evaluation*: The API is thoroughly tested using Postman or Curl to ensure functionality, correctness, and resilience.
User feedback and performance analysis are used for continuous improvement.

### Prerequistes:
- NodeJS (v20 or newer)

### Installation:
- `npm install` - This will install all the dependencies of the application.
- create `.env` file in your project directory
- `node index.js` - This will start the application on port 3000.

### Routes:
- `POST` **/users/register**: Register a new user.
- `POST` **/users/login**: Log in a user.
- `POST` **/events**: To create a new event.
- `GET` **/events**: To retrieve all the present events.
- `PUT` **/events**: To update an event.
- `DELETE` **/events**: To delete an event.
- `POST` **/events/:id/register**: To register an user to a specific event.

### Example `.env`:
```text
APP_PASSWORD="your_app_password"
APP_EMAIL="your@gmail.com"
```
