var inputText = document.querySelector("#input");
var btn = document.querySelector("#btn");
var outputText = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/dothraki.json";
// var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslatedURL(text){
    return serverURL + "?text=" + text;
}

function errorHandling(error){
    alert("Something went wrong, Please try again later")
}

function clickHandler(){
    var userInput = inputText.value;
    fetch(getTranslatedURL(userInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandling);
}

btn.addEventListener("click", clickHandler);