

var FoodList = Backbone.View.extend({

	events: {
		"click .steakbutton": "goToSteak",
		"click .seafoodbutton": "goToSeafood",
		"click .burgerbutton": "goToBurger",
		"click .asianbutton": "goToAsian",
		"click .mexicanbutton": "goToMexican",
		"click .pizzabutton": "goToPizza",
		"click .vegetarianbutton": "goToVegetarian",
		"click .sushibutton": "goToSushi",
		"click .barbutton": "goToBar"

	}, 

	initialize: function() {
		this.render();
	},

	render: function () {
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
	},

	goToPizza: function(e) {
		e.preventDefault();
		router.navigate("pizza", {trigger: true});
		$(this).trigger('reset');
	},

	goToVegetarian: function(e) {
		e.preventDefault();
		router.navigate("vegetarian", {trigger: true});
		$(this).trigger('reset');
	},

	goToSushi: function(e) {
		e.preventDefault();
		router.navigate("sushi", {trigger: true});
		$(this).trigger('reset');
	},

	goToBar: function(e) {
		e.preventDefault();
		router.navigate("bar", {trigger: true});
		$(this).trigger('reset');
	}

});