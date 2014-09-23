


var MexicanList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {

		var source = $("#mexican").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#restaurants" + ", " + "#mexican");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});

		$(this).trigger('reset');
	}

});


var AsianList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {

		var source = $("#asian").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#restaurants" + ", " + "#asian cuisine");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});

		$(this).trigger('reset');
	}

});


var BurgerList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {

		var source = $("#burger").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#burger" + ", " + "#americana");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});

		$(this).trigger('reset');
	}

});
var SeafoodList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {
		var source = $("#seafood").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#restaurants" + ", " + "#seafood");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});
		console.log("navigated home");

		$(this).trigger('reset');
	}

});


var SteakList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {

		var source = $("#steak").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#restaurants" + ", " + "#steak");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});

		$(this).trigger('reset');
	}

});


var FoodList = Backbone.View.extend({

	events: {
		"click .steakbutton": "goToSteak",
		"click .seafoodbutton": "goToSeafood",
		"click .burgerbutton": "goToBurger",
		"click .asianbutton": "goToAsian",
		"click .mexicanbutton": "goToMexican"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {
		console.log("I'm in main view render function");
		var source = $("#food").html();
		this.$el.html(source);

		$(".searchoverview").hide();
		$(".welcome").show();

		return this;
	},

	goToSteak: function(e) {
		e.preventDefault();
		router.navigate("steak", {trigger: true});
		$(this).trigger('reset');
	},

	goToSeafood: function(e) {
		e.preventDefault();
		router.navigate("seafood", {trigger: true});
		$(this).trigger('reset');
	},

	goToBurger: function(e) {
		e.preventDefault();
		router.navigate("burger", {trigger: true});
		$(this).trigger('reset');
	},

	goToAsian: function(e) {
		e.preventDefault();
		router.navigate("asian", {trigger: true});
		$(this).trigger('reset');
	},

	goToMexican: function(e) {
		e.preventDefault();
		router.navigate("mexican", {trigger: true});
		$(this).trigger('reset');
	}



});


var Router = Backbone.Router.extend ({

	routes: {
		"": "main_page",
		"steak": "steak_page",
		"seafood": "seafood_page",
		"burger": "burger_page",
		"asian": "asiancuisine_page",
		"mexican": "mexicancuisine_page"
	},


	initialize: function () {
		
	},


	main_page: function () {
		var food = new FoodList();
		$('#main').html(food.el);
	},

	steak_page: function () {
		var steak = new SteakList();
		$('#main').html(steak.el);
	},

	seafood_page: function () {
		var seafood = new SeafoodList();
		$('#main').html(seafood.el);
	},

	burger_page: function () {
		var burger = new BurgerList();
		$('#main').html(burger.el);
	},

	asiancuisine_page: function () {
		var asian = new AsianList();
		$('#main').html(asian.el);
	},

	mexicancuisine_page: function () {
		var mexican = new MexicanList();
		$('#main').html(mexican.el);
	}

});


// var Video = Backbone.Model.extend ({
// 	defaults: {
// 		title: '',
// 		url: ''
// 	},

// 	initialize: function () {
// 		var title = this.get('title');
// 		var url = this.get('id');
// 		console.log( title + ' is the video title.');
// 		console.log(url);
// 	}

// });

// var ALLvideos = Backbone.Collection.extend ({
// 	model: Video,
// 	url: "http://vimeo.com/api/v2/channel/staffpicks/videos.json"
// });

// var all = new ALLvideos();


// var Restaurants = Backbone.Model.extent ({
// 	defaults: {
// 		id: '', 
// 		name: '',
// 		city: '', 
// 		state: '',
// 		reserve_url: ''
// 	},

// 	initialize: function () {
// 		var id = this.get('id');
// 		var name = this.get('name');
// 		var city = this.get('city');
// 		var state = this.get('state');
// 		var reserve_url = this.get('reserve_url');
// 	}

// });

// var Allrestaurants = Backbone.Collection.extend ({
// 	model: Restaurants,
// 	url: ""
// })



var router = new Router();
Backbone.history.start();

var today = new Date();
var hourNow = today.getHours();
var greeting;
var meal; 
if (hourNow > 18) {
	greeting = 'Good evening!';
	meal = 'Dinner'
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
	meal = 'Lunch/Dinner';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
	meal = 'Brunch/Lunch';
} else { 
	greeting = 'Welcome!';
}

$("h1").prepend(greeting);

$("h2").append(geoplugin_city() + ", " + geoplugin_region() + ", " + geoplugin_countryName());

$(".psearch").prepend(geoplugin_city() + ", " + geoplugin_region());

$('.home').on('click', function () {
	router.navigate("", {trigger: true});
	console.log("navigated home");
});

// $('.steakbutton').on('click', function () {
// 	router.navigate("restaurants", {trigger: true});
// 	console.log("button clicked");
// });


// // var source = $("#map").html();

// var latitude = Handlebars.compile(geoplugin_latitude());

// var longitude = Handlebars.compile(geoplugin_longitude());
