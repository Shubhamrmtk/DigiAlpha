# DigiAlpha
This repository contains a NodeJS application for user management. The application exposes REST APIs to perform the following operations:

Register User: Create a new user by providing their first name, last name, email, and phone number.

Get User by ID: Retrieve user details by providing their unique identifier.

Update User: Modify user details by providing their unique identifier and the updated information.

Delete/Disable User: Deactivate a user by providing their unique identifier.

List All Users with filters: Retrieve a list of all users, with the option to filter the results by first name, last name, email, or phone number.

The application uses MySQL as the database to store user information. The Knex library is used to perform database migrations and interact with the database
