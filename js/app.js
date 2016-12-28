var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');
	this.imgAttribute = ko.observable('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');
	//this.level = ko.observable('Infant');
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

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	this.nickNames = ko.observableArray([
		{nName: 'Dirk'},
		{nName: 'Tchaikovski'},
		{nName: 'Coolio'},
		{nName: 'Bingo'},
		{nName: 'Greg Allman'}
		]);
}

ko.applyBindings(new ViewModel());