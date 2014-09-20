var Router = Backbone.Router.Extend ({
	routes: {
		"": "main_page",
		"restaurants": "restaurants_page"
	},

	initialize: function () {

	},

	main_page: function () {
		// console.log("loaded main page");
	},

	restaurants_page: function () {
		// console.log("loaded restaurants page");
	}

});

var router = new Router() {
	router.on(route:main_page, function () {
		console.log("loaded main page");
	});
}

Backbone.history.start();