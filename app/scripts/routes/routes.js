

var Router = Backbone.Router.extend ({

	routes: {
		"": "main_page",
		"steak": "steak_page",
		"seafood": "seafood_page",
		"burger": "burger_page",
		"asian": "asiancuisine_page",
		"mexican": "mexicancuisine_page",
		"pizza": "pizza_page",
		"vegetarian": "vegetarian_page",
		"sushi": "sushi_page",
		"bar": "bar_page"
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
	},

	pizza_page: function () {
		var pizza = new PizzaList();
		$('#main').html(pizza.el);
	},

	vegetarian_page: function () {
		var vege = new VegetarianList();
		$('#main').html(vege.el);
	},

	sushi_page: function () {
		var sushi = new SushiList();
		$('#main').html(sushi.el);
	},

	bar_page: function () {
		var bar = new BarList();
		$('#main').html(bar.el);
	}

});

