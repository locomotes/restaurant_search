

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