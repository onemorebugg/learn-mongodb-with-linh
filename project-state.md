# Project State after Lesson 1: MongoDB Essentials - Quick Start

## Project Setup:
- Node.js project initialized with `npm init -y`.
- MongoDB driver installed: `npm install mongodb`.

## `connect.js` File:
- Imports `MongoClient`.
- Defines MongoDB connection URI (`mongodb://localhost:27018` used for demonstration, default is 27017).
- Implements an `async main()` function with `try...finally` block for connection management.
- Connects to MongoDB.
- Selects `bookstore` database.
- Defines `books` collection reference.

## Concepts Covered:
- **Document**: JSON-like structure, stored as BSON.
- **Collection**: Group of Documents, similar to SQL Table but with flexible schema.
- **Field**: Key-value pair within a Document, similar to SQL Column.

## Next Steps:
- Ready to perform CRUD operations on the `books` collection.
