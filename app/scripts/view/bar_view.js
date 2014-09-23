

var BarList = Backbone.View.extend({

	events: {
		"click .home": "goToHome"
	}, 

	initialize: function() {
		this.render();
	},

	render: function () {

		var source = $("#bar").html();
		this.$el.html(source);

		$(".welcome").hide();
		$(".searchoverview").show();

		$(".psearch").append("#pub" + ", " + "#bar");

		return this;
	},

	goToHome: function(e) {
		e.preventDefault();
		router.navigate('', {trigger: true});

		$(this).trigger('reset');
	}

});