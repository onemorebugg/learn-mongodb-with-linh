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
        // Check Replica Set status to see its members and current state
        console.log('--- Checking Replica Set Status ---');
        const adminDb = db.admin();
        const replSetStatus = await adminDb.replSetGetStatus();
        console.log('Replica Set Name:', replSetStatus.set);
        console.log('My current role:', replSetStatus.myState);
        console.log('Members:', replSetStatus.members.map(member => ({ name: member.name, stateStr: member.stateStr, health: member.health === 1 ? 'OK' : 'DOWN' })));
        console.log('--- End Replica Set Status ---');




    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log('Connection closed.');
    }
}

// Run the main function and ensure the client is closed afterwards
main().catch(console.error);
