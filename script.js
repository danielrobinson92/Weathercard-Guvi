async function weather(){
    let response = await fetch("https://restcountries.com/v3.1/all");
    let api = await response.json();
    console.log(api);
    return api;
} 

async function cityWeather(country = 'india'){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=f814e82d5654bab1fd6e4f931e750f2a`);
    let api = await response.json();
    console.log(api);
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
        let htmlCountry = document.getElementById(`dropDown-country`);
        htmlCountry.innerHTML = `<option value="default">--Country--</option>`;
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
                let windspeed = document.getElementById("windSpeed");
                let temperature = document.getElementById("temperature");
                let location = document.getElementById("location");

                windspeed.innerHTML = `deg:268 / gust:0.59
                 / speed:0.63`;
                temperature.innerHTML = "test";
                location.innerHTML = "test";

          






            });
        });
}

weather()
// continent();



// Retriving value from API

function retriveValue(country){
    cityWeather(country);
}

retriveValue('france');








