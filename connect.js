// Import the MongoClient class from the 'mongodb' driver
const { MongoClient } = require('mongodb');

// Connection URI. Replace this with your connection string.
// Note: My local setup uses port 27018 with a replica set.
// The default MongoDB port is 27017.
const uri = 'mongodb://localhost:27018?directConnection=true&serverSelectionTimeoutMS=2000';

// Create a new MongoClient instance
const client = new MongoClient(uri);

// Define the main asynchronous function to handle connection and operations
async function main() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Successfully connected to MongoDB!');

        const dbName = 'bookstore';
        const db = client.db(dbName);
        console.log(`Working with database: ${db.databaseName}`);

        const collectionName = 'books';
        const booksCollection = db.collection(collectionName);
        console.log(`Working with collection: ${booksCollection.collectionName}`);



    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log('Connection closed.');
    }
}

// Run the main function and ensure the client is closed afterwards
main().catch(console.error);
