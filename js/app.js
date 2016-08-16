"use strict";

$(document).ready(function(){

var ask = ['Do ye like yer drinks strong?','Do ye like it with a salty tang?','Are ye a lubber who likes it bitter?','Would ye like a bit of sweetness with yer poison?','Are ye one for a fruity finish?'];
var currentQuestion = 0;
function prefrence(question,answer){

	this.prefrenceQuestion = question;

	this.answer = answer;
}

function showQuestion(){

	//$('#bartender-question').empty();
	$('p').append(ask[currentQuestion]);
}
 showQuestion();

$('a').click(function(event){

	event.preventDefault();
	
	

	var text = $(this).text();

$('#bartender-question').empty();

 var drinkPrefrence = new prefrence(ask[currentQuestion],text);

currentQuestion++;

showQuestion();

console.log(drinkPrefrence);

});







});