continent();

function clear(){
    continent();
    let htmlCountry = document.getElementById(`dropDown-country`);
    htmlCountry.innerText = ``;
}

async function weather(){
    let response = await fetch("https://restcountries.com/v3.1/all");
    let api = await response.json();
    return api;
} 

async function city(country){
    let responseCity = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
    let apiCity = await responseCity.json();
    let cityName = document.getElementById("city-name");
    cityName.innerHTML = `${apiCity[0].capital[0]}`
}


async function cityWeather(country){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=f814e82d5654bab1fd6e4f931e750f2a`);
    let api = await response.json();
    let windspeed = document.getElementById("windSpeed");
    let temperature = document.getElementById("temperature");
    let location = document.getElementById("location");
    let temperature_description = document.getElementById("weatherCard-temp");
        windspeed.innerHTML = `speed: ${api.wind.speed}, deg: ${api.wind.deg}`;
        temperature.innerHTML = `Temp_max : ${api.main.temp_max}\u00B0 / Temp_min : ${api.main.temp_min}\u00B0`;
        location.innerHTML = `Lat : ${api.coord.lat} / Lon : ${api.coord.lon}`;
        temperature_description.innerHTML = `${api.weather[0].description}, feels like ${api.main.feels_like}\u00B0`
        console.log(api);
        city(country);  //Calling function to print the city name
    
}

// Continent
async function continent (){
    
    let response = await weather();
    let temp = response.map((x)=>{
        return x.continents.join("");       
    });
    let continent = temp.filter((x,i)=> temp.indexOf(x) == i);
    let htmlContinent = document.getElementById(`dropDown-continent`);
    htmlContinent.innerHTML = `<option value="default">--Continent--</option>`;
    let htmlCountry = document.getElementById(`dropDown-country`);
        htmlCountry.innerHTML = `<option value="default">--Country--</option>`;
        
    for (let i = 0; i < continent.length; i++){
        var x = document.createElement('option');
        x.innerHTML = `${continent[i]}`;
        x.setAttribute ("value",continent[i]);
        htmlContinent.append(x);
    }

    // Country
    // Get the value of selected continent from the drop down & filter the country
    htmlContinent.addEventListener("change",function(){
        let selectedContinent = htmlContinent.value;
        
            for (let j = 0; j < response.length; j++){
                if (selectedContinent == response[j].continents[0]){
                    var x = document.createElement('option');
                    x.innerHTML = `${response[j].name.common}`;
                    x.setAttribute ("value",response[j].name.common);
                    htmlCountry.append(x);
                }
        }
    
// Read the country and populate the value in HTML page
        htmlCountry.addEventListener("change",function(){
            let selectedCountry = htmlCountry.value;
            cityWeather(selectedCountry);
            });
        });
}



