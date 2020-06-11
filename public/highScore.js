var topScore = document.getElementsByClassName('score-icon').item(0);
topScore.innerHTML='<img src="/images/topscore.png">';

var saveButton = document.querySelector('.modal-accept-button');

saveButton.addEventListener('click', function (event) {
    var username = document.getElementById('username-input-box').value;
    var score = document.getElementById('score-input-box').value;

    if (username !== "" && score !== "") {
        var http = new XMLHttpRequest();
        var URL = '/highscores/new';
        var userData = {
            "name": username,
            "score": score
        };
        http.open('POST', URL, true);
        http.setRequestHeader("Content-Type", "application/json");

        http.onchangestate = function () {
            if (http.readyState === 4 && http.status === 200) {
                console.log(this.responseText);
            }
         };

        http.send(JSON.stringify(userData));
        console.log(userData);
    }
});
