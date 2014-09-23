

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

