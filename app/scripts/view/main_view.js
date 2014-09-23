

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