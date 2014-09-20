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
// var videoView = Backbone.View.extend({
// 	template: function(model) {
// 		return _.template($('#vid_stream').html());
// 	},

// 	el: $('#hero-unit ul'),

// 	initialize: function(){
// 		this.render(); 
// 	},

// 	render: function(){
// 		this.$el.html(this.template(this.collection))
// 	}

// });

// all.fetch().done(function(){
// 	new videoView({collection: all})



// });
// var Video = Backbone.Model.extend ({
// 	defaults: {
// 		title: '',
// 		url: ''
// 	},

// 	initialize: function () {
// 		var title = this.get('title');
// 		var url = this.get('id');
// 		console.log( title + ' is the video title.');
// 		console.log(url);
// 	}

// });

// var ALLvideos = Backbone.Collection.extend ({
// 	model: Video,
// 	url: "http://vimeo.com/api/v2/channel/staffpicks/videos.json"
// });

// var all = new ALLvideos();


// var Restaurants = Backbone.Model.extent ({
// 	defaults: {
// 		id: '', 
// 		name: '',
// 		city: '', 
// 		state: '',
// 		reserve_url: ''
// 	},

// 	initialize: function () {
// 		var id = this.get('id');
// 		var name = this.get('name');
// 		var city = this.get('city');
// 		var state = this.get('state');
// 		var reserve_url = this.get('reserve_url');
// 	}

// });

// var Allrestaurants = Backbone.Collection.extend ({
// 	model: Restaurants,
// 	url: ""
// })
// $.getJSON( "ajax/test.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });

// $.getJSON("http://http://opentable.herokuapp.com/api/restaurants?anything", function(data) {
  // $.each( data, function( name, city ) {
  //   console.log(name);
  //   console.log(city);
  // });
 
  // $( "<ul/>", {
  //   "class": "my-new-list",
  //   html: items.join( "" )
  // }).appendTo( "body" );

	
// });

var restaurants = $.getJSON("http://http://opentable.herokuapp.com/api/cities");

// $.each(restaurants, function(data) {
// 	var city = data.city;
// 	// console.log(city);
// });

// restaurants.forEach

var today = new Date();
var hourNow = today.getHours();
var greeting;
var meal; 
if (hourNow > 18) {
	greeting = 'Good evening!';
	meal = 'Dinner'
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
	meal = 'Lunch/Dinner';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
	meal = 'Brunch/Lunch';
} else { 
	greeting = 'Welcome!';
}

$("h1").prepend(greeting);

$("h2").append(geoplugin_city() + ", " + geoplugin_region() + ", " + geoplugin_countryName());



