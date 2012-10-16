function MyViewModel() {
	this.people = [
		{ name: 'Franklin', credits: 250 },
		{ name: 'Mario', credits: 5800 }
	]
}
ko.applyBindings(new MyViewModel());