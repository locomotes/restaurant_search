

var VegetarianList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {

		var source = $("#vegetarian").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#restaurants" + ", " + "#vegetarian");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});

		$(this).trigger('reset');
	}

});