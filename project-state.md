# Project State after Lesson 3: MongoDB Essentials - Replica Sets

## Project Setup:
- Node.js project initialized with `npm init -y`.
- MongoDB driver installed: `npm install mongodb`.

## `connect.js` File:
- Imports `MongoClient`.
- Defines MongoDB connection URI (`mongodb://localhost:27018?directConnection=true` used for demonstration of single-node replica set, default is 27017).
- Implements an `async main()` function with `try...finally` block for connection management.
- Connects to MongoDB.
- Selects `bookstore` database.
- Defines `books` collection reference.
- **NEW**: Added code to retrieve and log Replica Set status (`adminDb.replSetGetStatus()`), including replica set name, current node role (Primary/Secondary), and member details.

## Concepts Covered:
- **Document**: JSON-like structure, stored as BSON.
- **Collection**: Group of Documents, similar to SQL Table but with flexible schema.
- **Field**: Key-value pair within a Document, similar to SQL Column.
- **Replica Sets**: High availability and data redundancy solution for MongoDB.
    - **Primary**: Handles all write operations.
    - **Secondary**: Replicates data from Primary, can handle read operations (optional), participates in elections.
    - **Arbiter**: Participates in elections but does not store data.
- **Failover**: Automatic process of electing a new Primary when the current Primary becomes unavailable.
- **Connection URI for Replica Sets**: Understanding `?directConnection=true` for single-node setups vs. multi-node URI with `?replicaSet=<name>`.

## Next Steps:
- Explore CRUD operations and data modeling in MongoDB.