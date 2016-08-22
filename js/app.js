"use strict";

$(document).ready(function(){

// var ask = ['Do ye like yer drinks strong?','Do ye like it with a salty tang?','Are ye a lubber who likes it bitter?','Would ye like a bit of sweetness with yer poison?','Are ye one for a fruity finish?'];
// var myDrink = [];
// var currentQuestion = 0;

// function prefrence(question,answer){

// 	this.prefrenceQuestion = question;

// 	this.answer = answer;
// }
// function pantry(ingredients){

// 	this.ingredients = ingredients;
// }

// function drink(mixture){

// 	this.mix = mixture;

// }
//  var strong = new pantry(['Glug of rum ','slug of whisky ','splash of gin ']);

//  var salty = new pantry(['Olive on a stick ','salt-dusted rim ','rasher of bacon ']);

//  var bitter = new pantry(['Shake of bitters ','splash of tonic ','twist of lemon peel ']);

//  var sweet = new pantry(['Sugar cube ','spoonful of honey ','splash of cola ']);

//  var Fruity = new pantry(['Slice of orange ','dash of cassis ','cherry on top ']);

//  function showQuestion(){

// 	$('p').append(ask[currentQuestion]);

// }
//  showQuestion();

//  function mixDrink(drinkPref){

//  	if(drinkPref.prefrenceQuestion ==="Do ye like yer drinks strong?"&& drinkPref.answer==='Yes'){

//  		myDrink.push(strong.ingredients[Math.floor((Math.random() * 3) + 0)]);

//  	} else if(drinkPref.prefrenceQuestion ==="Do ye like it with a salty tang?"&& drinkPref.answer==='Yes') {

//   		myDrink.push(salty.ingredients[Math.floor((Math.random() * 3) + 0)]);
		
//  	} else if(drinkPref.prefrenceQuestion ==="Are ye a lubber who likes it bitter?"&& drinkPref.answer==='Yes') {

//   		myDrink.push(bitter.ingredients[Math.floor((Math.random() * 3) + 0)]);
		
//  	} else if(drinkPref.prefrenceQuestion ==="Would ye like a bit of sweetness with yer poison?"&& drinkPref.answer==='Yes') {

//   		myDrink.push(sweet.ingredients[Math.floor((Math.random() * 3) + 0)]);
		
//  	} else if(drinkPref.prefrenceQuestion ==="Are ye one for a fruity finish?"&& drinkPref.answer==='Yes') {

//   		myDrink.push(Fruity.ingredients[Math.floor((Math.random() * 3) + 0)]);
		
//  	} 

//  	var mixture = new drink(myDrink);

//  	if(currentQuestion >= ask.length){
//  		$('p').empty();

//  		$('a').empty();

//  		$('span').empty();

//  		$('p').append("<span id = 'blue'>Ye Drink Be a:</span> " + mixture.mix);

//  		$('#blurb').css("background-color", "#6b1d1d");

//  	}

//  }

// 	$('a').click(function(event){

// 		event.preventDefault();

// 		var text = $(this).text();

// 		$('#bartender-question').empty();

// 		var drinkPrefrence = new prefrence(ask[currentQuestion],text);

// 		currentQuestion++;

// 		showQuestion();

// 		mixDrink(drinkPrefrence);


// 	});

//Pantry------------------------------------------------------------------------------------

var Pantry = function() {

 	this.strong = ['Glug of rum ','slug of whisky ','splash of gin '];

	this.salty = ['Olive on a stick ','salt-dusted rim ','rasher of bacon '];

 	this.bitter = ['Shake of bitters ','splash of tonic ','twist of lemon peel '];

 	this.sweet = ['Sugar cube ','spoonful of honey ','splash of cola '];

 	this.fruity = ['Slice of orange ','dash of cassis ','cherry on top '];
};
//Ingredients------------------------------------------------------------------------------------

var Ingredients = function(){

	Pantry.call(this);

	this.preferences = {

		strong : false,

		salty : false,

		bitter : false,

		sweet : false,

	 	fruity : false
	}

}

Ingredients.prototype = Object.create(Pantry.prototype);//

Ingredients.prototype.constructor = Ingredients;

//Drink------------------------------------------------------------------------------------
var Drink = function(){

	Ingredients.call(this);

	this.drink = [];
}

Drink.prototype = Object.create(Ingredients.prototype);

Drink.prototype.constructor = Drink;

Drink.prototype.creatDrink = function(){


}

//Bartender------------------------------------------------------------------------------------

 var Bartender = function(){

 	Drink.call(this);

 	this.questions = ['Do ye like yer drinks strong?','Do ye like it with a salty tang?','Are ye a lubber who likes it bitter?','Would ye like a bit of sweetness with yer poison?','Are ye one for a fruity finish?'];
	
	this.types = ['strong','salty','bitter','sweet','fruity'];

	this.currentQuestion = 0;

 }

Bartender.prototype = Object.create(Drink.prototype);

Bartender.prototype.constructor = Bartender;

Bartender.prototype.askQuestion = function(){

 	$('p').append(this.questions[this.currentQuestion]);
}

 Bartender.prototype.init = function(){

	this.askQuestion();
}

Bartender.prototype.clickHandler = function(){

	var self = this;

	$('a').click(function(event){
	
	event.preventDefault();

	$('p').empty();

	var text = $(this).text();

	if(text === 'Yes'){

		self.preferences[self.types[self.currentQuestion]] = true;

	} else {

		self.preferences[self.types[self.currentQuestion]] = false;

	}

	// console.log(self.types[self.currentQuestion]);

	// console.log(self.preferences[self.types[self.currentQuestion]]);
	
	self.currentQuestion++;

	self.askQuestion(self.types[self.currentQuestion],text);

	//console.log(self.preferences)

	// console.log(self);



});

}

var bartender = new Bartender();

bartender.init();

bartender.clickHandler();






	

















});