"use strict";

$(document).ready(function(){

	//Pantry------------------------------------------------------------------------------------

	var Pantry = function() {

	 	this.strong = ['Glug of rum','slug of whisky','splash of gin'];

		this.salty = ['Olive on a stick','salt-dusted rim','rasher of bacon'];

	 	this.bitter = ['Shake of bitters','splash of tonic','twist of lemon peel'];

	 	this.sweet = ['Sugar cube','spoonful of honey','splash of cola'];

	 	this.fruity = ['Slice of orange','dash of cassis','cherry on top'];
	};

	//Ingredients------------------------------------------------------------------------------------

	var Ingredients = function() {

		Pantry.call(this);

		this.preferences = {}

	}

	Ingredients.prototype = Object.create(Pantry.prototype);

	Ingredients.prototype.constructor = Ingredients;

	//Drink------------------------------------------------------------------------------------

	var Drink = function() {

		Ingredients.call(this);

		this.drink = [];
	}

	Drink.prototype = Object.create(Ingredients.prototype);

	Drink.prototype.constructor = Drink;

	Drink.prototype.creatDrink = function() {

		for(var prop in this.preferences) {

			if(this.currentQuestion > this.questions.length-1 ) {
				
				if(this.preferences[prop] === true){

					this.drink.push(this[prop][Math.floor((Math.random() * 3) + 0)]);

				}
			}

		}

	return this.drink;

	}

	//Bartender------------------------------------------------------------------------------------

	 var Bartender = function() {

	 	Drink.call(this);

	 	this.questions = ['Do ye like yer drinks strong?','Do ye like it with a salty tang?','Are ye a lubber who likes it bitter?','Would ye like a bit of sweetness with yer poison?','Are ye one for a fruity finish?'];
		
		this.types = ['strong','salty','bitter','sweet','fruity'];

		this.currentQuestion = 0;

	 }

	Bartender.prototype = Object.create(Drink.prototype);

	Bartender.prototype.constructor = Bartender;

	Bartender.prototype.askQuestion = function() {

	 	$('p').append(this.questions[this.currentQuestion]);
	}

	 Bartender.prototype.init = function() {

		this.askQuestion();
	}

	 Bartender.prototype.display = function() {

		if(this.currentQuestion > this.questions.length-1 ) {

			$('p').empty();

			$('a').empty();

			$('span').empty();

			$('p').append("<span id = 'blue'>Ye Drink Be a:</span> " + this.creatDrink().join(", "));

			$('#blurb').css("background-color", "#6b1d1d");		
		}
	}

	Bartender.prototype.clickHandler = function() {

		var self = this;

		$('a').click(function(event) {
		
			event.preventDefault();

			$('p').empty();

			var text = $(this).text();

			if(text === 'Yes'){

				self.preferences[self.types[self.currentQuestion]] = true;

			} 
			
			self.currentQuestion++;

			self.askQuestion(self.types[self.currentQuestion],text);

			bartender.display();

		});

	}

		var bartender = new Bartender();

		bartender.init();

		bartender.clickHandler();

});