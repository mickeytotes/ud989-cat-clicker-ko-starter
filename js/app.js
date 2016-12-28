var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');
	this.imgAttribute = ko.observable('https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');
	//this.level = ko.observable('Infant');
	this.level = ko.computed(function() {
		if(this.clickCount < 10) {
			return "Infant";
		}

		if(this.clickCount >= 10) {
			return "Kitten";
		}
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	//this.changeLevel = ko.computed(function(){
	//	if(clickCount > 10) {
	//		this.level('Kitten');
	//	}
	//}, this);
}

ko.applyBindings(new ViewModel());