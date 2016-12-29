var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribute = ko.observable(data.imgAttribute);
	this.nickNames = ko.observableArray(data.nickNames);

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

	this.currentCat = ko.observable(new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/cat-animal.jpeg',
		imgAttribute: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
		nickNames: [
		{nName: 'Dirk'},
		{nName: 'Tchaikovski'},
		{nName: 'Coolio'},
		{nName: 'Bingo'},
		{nName: 'Greg Allman'}
		]
	}));

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());