var router = new Router();
Backbone.history.start();




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


$('.home').on('click', function () {
	router.navigate("", {trigger: true});
	console.log("navigated home");
});

$('.steakbutton').on('click', function () {
	router.navigate("restaurants", {trigger: true});
	console.log("button clicked");
});


