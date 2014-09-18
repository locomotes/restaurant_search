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



