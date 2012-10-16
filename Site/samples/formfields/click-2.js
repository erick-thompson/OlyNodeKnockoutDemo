function MyViewModel() {
     var self = this;
     self.places = ko.observableArray(['London', 'Paris', 'Tokyo']);

     self.removePlace = function(place) {
         self.places.remove(place)
     }
 }
 ko.applyBindings(new MyViewModel());