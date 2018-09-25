function generateHat() {
	const color = ['black', 'gray', 'red', 'blue', 'pink']
	const material = ['wood', 'plastic', 'metal']
	const hat = ['tophat', 'cap', 'fedora', 'beret', 'beanie', 'derbie', 'fez', 'turban', 'tricorne'];
	function randomElement(list) {
		let r = Math.random() * list.length;
		return list[Math.floor(r)];
	}

	let c = randomElement(color);
	let m = randomElement(material);
	let h = randomElement(hat);
	return {
		name: h,
		color: c,
		material: m,
		price: Math.floor(50 + Math.random() * 200)
	};
}

function getHatList(count) {
	let list = [];
	while( count > 0 ) {
		list.push( generateHat() );
		count--;
	}
	return list;
}

//console.log( getHatList(3) );

module.exports = {
	getHatList: getHatList
}




//
