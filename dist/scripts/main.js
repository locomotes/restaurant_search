

var RestaurantList = Backbone.View.extend({

	events: {

	}, 

	initialize: function() {
		this.render();
	},

	render: function () {
		console.log("I'm in restaurant view render function");
		var source = $("#map").html();
		this.$el.html(source);

		return this;
	}

});


var FoodList = Backbone.View.extend({

	events: {

	}, 

	initialize: function() {
		this.render();
	},

	render: function () {
		console.log("I'm in main view render function");
		var source = $("#food").html();
		this.$el.html(source);

		return this;
	}

});


var Router = Backbone.Router.extend ({

	routes: {
		"": "main_page",
		"restaurants": "restaurants_page"
	},


	initialize: function () {
		
	},


	main_page: function () {
		console.log("loaded main page");
		var food = new FoodList();
		$('#main').html(food.el);
	},

	restaurants_page: function () {
		console.log("loaded restaurants page");
		var restaurants = new RestaurantList();
		$('#main').html(restaurants.el);
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


$('.home').on('click', function () {
	router.navigate("", {trigger: true});
	console.log("navigated home");
});

$('.steakbutton').on('click', function () {
	router.navigate("restaurants", {trigger: true});
	console.log("button clicked");
});


