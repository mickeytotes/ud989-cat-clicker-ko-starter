var initialCats = [
	{
		name: "Toby",
		imgSrc: "img/happy-kitten.jpg",
		clickCount: 0,
		imgAttribute: 'n/a',
		nickNames: ['Waiting-cat', 'Kilter', 'Ray']
	},
	{
		name: "Cecile",
		imgSrc: "img/screaming.jpeg",
		clickCount: 0,
		imgAttribute: 'n/a',
		nickNames: ['Rose', 'China Doll', 'Texas Doll', 'Hank']
	},
	{
		name: "Johnson",
		imgSrc: "img/bald-cat.jpg",
		clickCount: 0,
		imgAttribute: 'n/a',
		nickNames: ['Noni', 'Lady Licker', 'Ball', 'Twang']
	},
	{
		name: "Olivia",
		imgSrc: "img/waiting-cat.jpg",
		clickCount: 0,
		imgAttribute: 'n/a',
		nickNames: ['Hamlette', 'Fly Catcher', 'Psudo', 'Eyes']
	},
	{
		name: "Stormio",
		imgSrc: "img/duh-cat.jpg",
		clickCount: 0,
		imgAttribute: 'n/a',
		nickNames:['Strongy', 'Effy', 'Dong']
	}
]

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
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	this.setCurrentCat = function(i) {
		this.currentCat = this.currentCat(this.catList()[i]);
	}
}

ko.applyBindings(new ViewModel());