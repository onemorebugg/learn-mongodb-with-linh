# Project State after Lesson 4: MongoDB Essentials - Sharding

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

## Concepts Covered (New in Lesson 4):
- **Horizontal Scaling**: Adding more machines to distribute load, contrasted with Vertical Scaling (upgrading single machine).
- **Sharding**: MongoDB's method for horizontal scaling by distributing data across multiple machines based on a 'shard key'.
    - **Purpose**: Handle large datasets and high throughput.
    - **Sharded Cluster Architecture**:
        - **mongos router**: Interface for client applications, routes queries to appropriate shards.
        - **Config Servers**: Stores metadata about the cluster, including chunk ranges and shard locations (implemented as a Replica Set).
        - **Shards**: Stores the actual data (each is a Replica Set).
- **Shard Key**: A field or combination of fields used to distribute data across shards.
    - **Importance**: Critical for even data distribution and efficient query routing.
    - **Types of Shard Keys**:
        - **Hashed Sharding**: Uses a hashed value of the shard key for even distribution across shards, good for write scaling, less efficient for range queries.
        - **Range Sharding**: Divides data into contiguous ranges based on the shard key, efficient for range queries, but can lead to hot spots.
        - **Compound Shard Key**: Uses multiple fields for sharding, allowing for more granular control and optimizing for specific query patterns.
    - **Considerations for Shard Key Selection**: Cardinality, query patterns, data distribution, avoiding monotonic keys.

## Next Steps:
- Explore CRUD operations and data modeling in MongoDB.