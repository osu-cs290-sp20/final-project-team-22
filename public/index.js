function login() 
{
	// User input name
    var name = document.getElementById('name-input').value;
    var html = 'Welcome ' + name;
 
    document.getElementById('username').innerHTML = html;
	
	// Disappear the input, button, and content objects
	document.getElementById('name-input').style.display = 'none';
	document.getElementById('login-button').style.display = 'none';
	document.getElementById('intro').style.display = 'none';
	
	document.getElementById('r-button').style.display = 'inline';
	
}

function random_pic()
{	
	//redirects domain after clicking the start button
	window.location.pathname = '/start';
}

function createMultipleChoice() {
	
	var cityData = require('./cityData.json');
	var rand = Math.floor(Math.random() * 50);

/*	var cityImage = {
		city: ,
		photoURL: "https://placekitten.com/g/50/50"
	}
*/
	var cityHTML = Handlebars.templates.cityCard(cityData[rand]);
	var contentContainer = document.querySelector('.image-container');
	
	while(contentContainer.lastChild){
		contentContainer.removeChild(contentContainer.lastChild);
	}

	contentContainer.insertAdjacentHTML("beforeend", cityHTML);


	/*
	var multipleChoiceCardContent = {
		city: "city",
		city: "Canada",
		city: "New Belgium"
	};

	var multipleChoiceHTML = Handlebars.templates.multipleChoiceCard(multipleChoiceCardContent);
	var newContainer = document.querySelector(".choice-container");
	newContainer.insertAdjacentHTML("beforeend", multipleChoiceHTML);
	*/
}


//Add a counter for highscores each time an answer is selected

var counter = 0;

function click_button_1() {
	counter++;
	createMultipleChoice();
}

function click_button_2() {
	counter++;
	console.log(counter);
	window.location.pathname = '/start';
}

function click_button_3() {
	counter++;
	console.log(counter);
	window.location.pathname = '/start';
}

//Click buttons
try
{
document.getElementById('login-button').addEventListener('click', login);
}
catch{}

try
{
document.getElementById('r-button').addEventListener('click', random_pic);
}
catch{}

try{
document.getElementById('one').addEventListener('click', click_button_1);
}
catch{}

try{
document.getElementById('two').addEventListener('click', click_button_2);
}
catch{}

try{
document.getElementById('three').addEventListener('click', click_button_3);
}
catch{}
//Default element setting disappear until action taken
try
{
document.getElementById('r-button').style.display = 'none';
}
catch{}