

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