var jokesDiv = document.getElementById('jokes');
    //  let jokes = "Good Morning";

    //  jokesDiv.innerHTML = jokes;

 fetch('https://api.chucknorris.io/jokes/random').then(function(a){ return a.json()}).then(function(b){jokesDiv.innerHTML=b.value;})
 