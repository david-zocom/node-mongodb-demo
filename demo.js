const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'forestdb';
const collectionName = 'animals';

console.log('About to connect to MongoDB');
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if( err ) {
		console.log('Could not connect! Error: ', err);
		return;
	}
	const forest = client.db(databaseName);
	console.log('We are connected to forestdb');
	const animals = forest.collection(collectionName);
	let filter = {};
	animals.find(filter).toArray((err, docs) => {
		client.close();
		console.log('Connection closed.');
		if( err ) {
			console.log('Could not use query find: ', err);
			return;
		}
		console.log('The animals are: ', docs);
	})
})
