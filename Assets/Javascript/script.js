var buttonPress = $('.buttonSearch');
var userInput = $('inputValue');
var cardName = $('.card-text');
var fetchButton = $('fetch-button');
var textBox = $("#inputValue").val().trim();
var tempEl = document.getElementById('tempaturePlace')
const weatherData = $('#weatherData');
const test = $('#test');

//var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'
//var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=78c009444386df8c11496b0a4e48dff0&units=imperial'



$('.buttonSearch').on('click', function(event){
    event.preventDefault()
    //getApi(textBox.value)
    //var box = document.getElementById(inputValue).value
    //console.log(box)
    var textBox = $("#inputValue").val().trim();
    var outPut = $(this).parent().attr('id')
    console.log(textBox, outPut);
    var requestLatLong = 'http://api.openweathermap.org/geo/1.0/direct?q='+ textBox+'&limit=1&appid=78c009444386df8c11496b0a4e48dff0'
    localStorage.setItem(outPut, textBox)
    $('#savedWeather').val(localStorage.getItem(textBox))
    console.log(localStorage)
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
                    // for (let i = 0; i < data.list.length; i++) {
                        // const tempDay = data.list[i].main.temp;
                        console.log(tempDay)
                        

                    var tempDay = data.list[0].main.temp
                    var tempHigh = [data.list[0].main.temp_max, data.list[8].main.temp_max, data.list[16].main.temp_max, data.list[32].main.temp_max, data.list[39].main.temp_max]

                    var tempLow = [data.list[0].main.temp_min, data.list[8].main.temp_min, data.list[16].main.temp_min, data.list[32].main.temp_min, data.list[39].main.temp_min]

                    // var forecastDate = data.list[0].clouds.dt_txt

                    var humidityLevel = [data.list[0].main.humidity, data.list[8].main.humidity, data.list[16].main.humidity, data.list[32].main.humidity, data.list[39].main.humidity];

                    var windSpeed = [data.list[0].wind.speed, data.list[8].wind.speed, data.list[16].wind.speed, data.list[32].wind.speed, data.list[39].wind.speed];

                    var iconcode = [data.list[0].weather[0].icon, data.list[8].weather[0].icon, data.list[16].weather[0].icon, data.list[32].weather[0].icon, data.list[39].weather[0].icon]

                    var iconurl = ["http://openweathermap.org/img/w/" + iconcode[0] + ".png", "http://openweathermap.org/img/w/" + iconcode[1] + ".png", "http://openweathermap.org/img/w/" + iconcode[2] + ".png","http://openweathermap.org/img/w/" + iconcode[3] + ".png","http://openweathermap.org/img/w/" + iconcode[4] + ".png"]
                    // var iconcode1 = data.list[1].weather[1].icon
                    // var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
                    // const div = $('<div>')
                    // const para = $('<p>')
                    // const tempatureDay = $('<p>')
                    // div.addClass('card card-body')
                    // para.addClass('card-text')
                    // para.text($(tempDay))
                    // weatherData.append(div);
                    // div.append(para);
                    // console.log(para.toString())

                    

                    temperaturePlace.append(tempDay)
                    $('#wicon').attr('src', iconurl[0]);
                    humidity.append(humidityLevel[0]+'%');
                    wind.append(windSpeed[0]+'mph');
                    
                    card1.append(tempHigh[1])
                    $('#cardIcon1').attr('src', iconurl[1]);
                    humidity1.append(humidityLevel[1]+'%');
                    wind1.append(windSpeed[1]+'mph');

                    card2.append(tempHigh[2])
                    $('#cardIcon2').attr('src', iconurl[2]);
                    humidity2.append(humidityLevel[2]+'%');
                    wind2.append(windSpeed[2]+'mph');
                    
                    card3.append(tempHigh[3])
                    $('#cardIcon3').attr('src', iconurl[3]);
                    humidity3.append(humidityLevel[3]+'%');
                    wind3.append(windSpeed[3]+'mph');
                    
                    card4.append(tempHigh[4])
                    $('#cardIcon4').attr('src', iconurl[4]);
                    humidity4.append(humidityLevel[4]+'%');
                    wind4.append(windSpeed[4]+'mph');
                    


                        // const li = $('<li>')
                        // const ul = $('<ul>')
                        // const div = $('<div>')
                        // const para = $('<p>')
                        // const tempatureDay = $('<p>')
                        // div.addClass('card card-body')
                        // li.addClass('text-align: center', 'background-color: darkgray')
                        // para.addClass('card-text')
                        // // JSON.stringify(tempDay);
                        // li.text($(tempDay));
                    
                        
                        // div.append(ul);
                        // // para.append('Tempature:' +ul)
                        // ul.append('Temperature: ' + tempDay)
                        // test.append(div);
                        // console.log(tempDay)

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


// function fiveDay(fruitCast){
//     console.log(fruitCast)
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];

// //     // for (let i = 0; i < 4; i++) {
// //       var count = fruits[i]
// //       console.log(count)
      
        
// //     }
// // }
// // fiveDay()