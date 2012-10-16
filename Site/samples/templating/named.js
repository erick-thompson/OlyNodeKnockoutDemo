function MyViewModel() {
     this.buyer = { name: 'Franklin', credits: 250 };
     this.seller = { name: 'Mario', credits: 5800 };
}
ko.applyBindings(new MyViewModel());