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