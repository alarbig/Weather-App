var buttonPress = $('.buttonSearch');
var userInput = $('inputValue');
var cardName = $('.card-text');
var fetchButton = $('fetch-button');
var textBox = $("#inputValue").val().trim();
var tempEl = document.getElementById('tempaturePlace')

//var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'
//var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'



$('.buttonSearch').on('click', function(event){
    event.preventDefault()
    //getApi(textBox.value)
    //var box = document.getElementById(inputValue).value
    //console.log(box)
    var textBox = $("#inputValue").val().trim();
    console.log(textBox) 
    var requestLatLong = 'http://api.openweathermap.org/geo/1.0/direct?q='+ textBox+'&limit=1&appid=78c009444386df8c11496b0a4e48dff0'
        console.log(requestLatLong)   
        fetch(requestLatLong)
        .then(function (response) {
            return response.json();
        })
        .then (function(data){
            console.log(data)
            var lat = data[0].lat
            var lon = data[0].lon
            console.log(lat, lon)

            function getApi(){
                var cityName = 'https://api.openweathermap.org/data/2.5/forecast?lat='+ lat+'&lon=' + lon +'&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'
                console.log(cityName)
                fetch(cityName)
                .then(function(response){
                return response.json();
                    })
                .then(function(data){
                    console.log(data)
                    var tempDay1 = data.list[0].main.temp
                    var feelsLike1 = data.list[0].main.feels_like
                    var icon1 = data.list[0].weather[0].icon1
                    var element = document.getElementById("card1")
                    var element1 = document.getElementById("tempIcon")
                    cardName.append(tempDay1)
                    element1.append(feelsLike1)
                    }
                    )}
                getApi();
            }
    )
});



// function getApi(cityName){       // = 'Denver'  this belonged with cityName=   cityName=textBox.value
//     fetch(cityName)
//     .then(function(response){
//     return response.json();
//     })
//     .then(function(data){
//            //console.log(data);
//             //console.log(data.main.temp);
//             //console.log(data.weather.description)
//             var listItem = document.createElement('p');
//             var listItem2 = document.createElement('p');
//             var paragraph = document.createTextNode(' degrees')
//             var paragraph2 = document.createTextNode(' Feels like')
//             listItem.textContent =  data.list[1].main.temp;
//             listItem2.textContent = data.list[0].main.feels_like;
//             listItem.appendChild(paragraph);
//             listItem.appendChild(paragraph2);
//             var element = document.getElementById("card1");
//             element.appendChild(listItem);
//             element.appendChild(listItem2);

//         tempEl.textContent = data.list[1].main.temp;
//         fiveDay(data)
//     })  
// }
// // fetchButton.addEventListener('click', getApi)


function fiveDay(weatherForcast){
    console.log(weatherForcast)
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    for (let i = 1; i < 4; i++) {
      var count = fruits[i]+1
      console.log(weatherForcast.list[i])
      
        
    }
}
fiveDay()