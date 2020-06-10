try
{
var city = document.querySelector(".city-card .answer").innerText;
}
catch{}

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

function click_answer()
{
	//add functionality here
	window.location.pathname = '/start';
}

//Add a counter for highscores each time an answer is selected

function click_button_1() {
	window.location.pathname = '/start';
}

function click_button_2() {
	window.location.pathname = '/start';
}

function click_button_3() {
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

try
{
document.getElementById('submit-answer').addEventListener('click', click_answer);
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