const MongoClient = require('mongodb').MongoClient;
const { getHatList } = require('./generateData.js');

const url = 'mongodb://127.0.0.1:27017';
const options = { useNewUrlParser: true };

console.log('Attempting to connect to MongoDB...');
MongoClient.connect(url, options, (err, client) => {
	if( err ) {
		console.log('An error occurred! ', err);
		return;
	}
	const db = client.db('hats');
	const collection = db.collection('hats');
	let numDocs = 2000;
	let data = getHatList(numDocs);
	console.log(`Connected. Attempting to insert data (${numDocs} docs)`);
	collection.insertMany(data, (err) => {
		if( err ) {
			console.log('Failed to insert data. ', err);
			client.close();
			return;
		}
		console.log('Inserted data. Closing client...');
		client.close();
	})
})








//
