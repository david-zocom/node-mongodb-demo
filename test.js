const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'forestdb';
const cName = 'animals';

const insertDocuments = function(db, callback) {
	// Get the documents collection
	const collection = db.collection(cName);
	// Insert some documents
	collection.insertMany(
		[ {name: 'bofink', legs: 2} ],
		function(err, result) {
			if( err )
				console.log('ERROR: '+err.message);
			console.log('inserted');
		}
	);
}
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
	if( err ) {
		console.log('ERROR cannot connect to MongoDB. Is the server running?', err.message);
		return;
	}
	console.log("Connected successfully to server");

	const db = client.db(dbName);
	insertDocuments(db, () => {})

	client.close();
});
