async function weather(){
    let response = await fetch("https://restcountries.com/v3.1/all");
    let api = await response.json();
    console.log(api);
}

weather();


async function cityWeather(){
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=f814e82d5654bab1fd6e4f931e750f2a");
    let api = await response.json();
    console.log(api);
}

cityWeather();