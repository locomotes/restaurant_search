

var RestaurantList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {
		console.log("I'm in restaurant view render function");
		$("#main").addClass("mainsize");
		var source = $("#map").html();
		this.$el.html(source);

		return this;
	},

	goToHome: function(e) {
		console.log('in goHome function')
		e.preventDefault();
		router.navigate('', {trigger: true});
		console.log("navigated home");

		$(this).trigger('reset');
	}

});