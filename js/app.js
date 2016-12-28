var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');
	this.imgAttribute = ko.observable('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());