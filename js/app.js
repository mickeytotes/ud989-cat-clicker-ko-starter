var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat-animal.jpeg');
	this.imgAttribute = ko.observable('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');
	this.nickNames = ko.observableArray([
		{nName: 'Dirk'},
		{nName: 'Tchaikovski'},
		{nName: 'Coolio'},
		{nName: 'Bingo'},
		{nName: 'Greg Allman'}
		]);

	this.level = ko.computed(function() {
		if(this.clickCount() < 10) {
			return "Infant";
		}
		if(this.clickCount() >= 10 && this.clickCount() < 50) {
			return "Kitten";
		}
		if(this.clickCount() >= 50 && this.clickCount() < 100) {
			return "Teen";
		}
		if(this.clickCount() >= 100) {
			return "Young Scrappy";
		}
	}, this);
}

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());