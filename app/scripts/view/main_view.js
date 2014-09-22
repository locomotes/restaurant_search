

var FoodList = Backbone.View.extend({

	events: {
		"click .steakbutton": "goToRestaurants"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {
		console.log("I'm in main view render function");
		var source = $("#food").html();
		this.$el.html(source);

		return this;
	},

	goToRestaurants: function(e) {
		e.preventDefault();
		router.navigate("restaurants", {trigger: true});
		console.log("button clicked");

		$(this).trigger('reset');
	}

});