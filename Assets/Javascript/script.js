var buttonPress = $('.buttonSearch');
var userInput = $('inputValue');
var cardName = $('.card-text');
var fetchButton = $('fetch-button');
var textBox = $("#inputValue").val().trim();
var tempEl = document.getElementById('tempaturePlace')

//var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'
//var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'


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


$('.buttonSearch').on('click', function(event){
    event.preventDefault()
    //getApi(textBox.value)
    //var box = document.getElementById(inputValue).value
    //console.log(box)
    var textBox = $("#inputValue").val().trim();
    console.log(textBox)
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?appid=78c009444386df8c11496b0a4e48dff0&units=imperial&q='+ textBox

    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    getApi(requestUrl);
});

function getApi(cityName){       // = 'Denver'  this belonged with cityName=   cityName=textBox.value
    fetch(cityName)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
           //console.log(data);
            //console.log(data.main.temp);
            //console.log(data.weather.description)
            var listItem = document.createElement('p');
            var listItem2 = document.createElement('p');
            var paragraph = document.createTextNode(' degrees')
            var paragraph2 = document.createTextNode(' Feels like')
            listItem.textContent =  data.list[1].main.temp;
            listItem2.textContent = data.list[0].main.feels_like;
            listItem.appendChild(paragraph);
            listItem.appendChild(paragraph2);
            var element = document.getElementById("card1");
            element.appendChild(listItem);
            element.appendChild(listItem2);

        tempEl.textContent = data.list[1].main.temp;
        fiveDay(data)
    })  
}
// fetchButton.addEventListener('click', getApi)


function fiveDay(weatherForcast){
    console.log(weatherForcast)
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    for (let i = 1; i < 5; i++) {
      var count = fruits[i]+1
      console.log(weatherForcast.list[i])
      
        
    }
}

