function MyViewModel() {
    this.acceptedNumericValue = ko.observable(123);
    this.lastInputWasValid = ko.observable(true);
     
    this.attemptedValue = ko.computed({
        read: this.acceptedNumericValue,
        write: function (value) {
            if (isNaN(value))
                this.lastInputWasValid(false);    
            else {
                this.lastInputWasValid(true);
                this.acceptedNumericValue(value); // Write to underlying storage
            }
        },
        owner: this
    });    
}
ko.applyBindings(new MyViewModel());