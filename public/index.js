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
	var keyword = document.getElementById('text-entry').value;
	console.log('Your answer: ',keyword);
	console.log('Answered', city);
	if (keyword == city)
	{
		console.log('correct');
		alert('Correct! This city is ', city)
	
	}
	else
	{
		console.log('not correct');
		alert('Incorrect!')
	}
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


//Default element setting disappear until action taken
try
{
document.getElementById('r-button').style.display = 'none';
}
catch{}