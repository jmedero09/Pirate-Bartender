"use strict";

$(document).ready(function(){

var ask = ['Do ye like yer drinks strong?','Do ye like it with a salty tang?','Are ye a lubber who likes it bitter?','Would ye like a bit of sweetness with yer poison?','Are ye one for a fruity finish?'];

var currentQuestion = 0;

function prefrence(question,answer){

	this.prefrenceQuestion = question;

	this.answer = answer;
}
function pantry(ingredients){

	this.ingredients = ingredients;
}

 var strong = new pantry(['Glug of rum','slug of whisky','splash of gin']);

 var salty = new pantry(['Olive on a stick','salt-dusted rim','rasher of bacon']);

 var bitter = new pantry(['Shake of bitters','splash of tonic','twist of lemon peel']);

 var sweet = new pantry(['Sugar cube','spoonful of honey','splash of cola']);

 var Fruity = new pantry(['Slice of orange','dash of cassis','cherry on top']);

 function showQuestion(){

	$('p').append(ask[currentQuestion]);
	console.log(strong);

}
 showQuestion();

$('a').click(function(event){

	event.preventDefault();

	var text = $(this).text();

	$('#bartender-question').empty();

//created here so that it can have acess to the users yes or no selection
	var drinkPrefrence = new prefrence(ask[currentQuestion],text);

	currentQuestion++;

	showQuestion();

	

});
//what i want to do next is to make some if else statments and based off the index of the question i will supply the new object with a random option from the proper pantry



});