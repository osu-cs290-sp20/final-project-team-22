<<<<<<< HEAD
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
	document.getElementById('myImg').style.display = 'inline';	
	
	//redirects domain after clicking the start button
	window.location.pathname = '/start';
}

//Click buttons
document.getElementById('login-button').addEventListener('click', login);
document.getElementById('r-button').addEventListener('click', random_pic);


//Default element setting disappear until action taken
document.getElementById('r-button').style.display = 'none';
=======
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
	//Randomly generate pics (test version)
	document.getElementById('myImg').style.display = 'inline';
	
	var r = Math.floor(Math.random() * 3);
	
	console.log(r);
	
	if (r == 0 )
	{
		document.getElementById("myImg").src = "images/test0.jpg";
	}
	else if (r == 1)
	{
		document.getElementById("myImg").src = "images/test1.jpg";
	}
	else if (r == 2)
	{
		document.getElementById("myImg").src = "images/test2.jpg";
	}
}

//Click buttons
document.getElementById('login-button').addEventListener('click', login);
document.getElementById('r-button').addEventListener('click', random_pic);


//Default element setting disappear until action taken
document.getElementById('r-button').style.display = 'none';
>>>>>>> 6c61e97e51d1f0ef4f273bdd53f4674991d62201
document.getElementById('myImg').style.display = 'none';