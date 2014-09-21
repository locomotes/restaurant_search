

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

