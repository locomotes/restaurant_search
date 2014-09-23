



var SushiList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {

		var source = $("#sushi").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#restaurants" + ", " + "#sushi");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});

		$(this).trigger('reset');
	}

});