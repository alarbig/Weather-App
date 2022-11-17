var buttonPress = $('.buttonSearch');
var userInput = $('inputValue');
var cardName = $('.card-text');
var fetchButton = $('fetch-button');

var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'
//var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.7392&lon=104.9903&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'

var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+ userInput +'&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'
//     .then(response => response.json())
//     .then(data => console.log(data))





// .then(function (response){
//         .then(function(data)); 
//         console.log(data);
//         return response.json();
//     })

// fetch('http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=78c009444386df8c11496b0a4e48dff0')
// .then(response => response.json())
//     .then(data => console.log(data))
var textBox = document.getElementById("inputValue").value
console.log(textBox)


function getApi(){
    fetch(requestUrl)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data);
       
            console.log(data.coord);
            console.log(data.main.temp);
            console.log(data.weather.description)
            var listItem = document.createElement('p');
            var listItem2 = document.createElement('p');
            var paragraph = document.createTextNode(' degrees')
            var paragraph2 = document.createTextNode(' Feels like')
            listItem.textContent =  data.main.temp;
            listItem2.textContent = data.main.feels_like;
            listItem.appendChild(paragraph);
            listItem.appendChild(paragraph2);
            var element = document.getElementById("card1");
            element.appendChild(listItem);
            element.appendChild(listItem2);
    }
    )  
}
fetchButton.addEventListener('click', getApi)
//getApi()