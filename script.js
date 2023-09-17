async function weather(){
    let response = await fetch("https://restcountries.com/v3.1/all");
    let api = await response.json();
    // console.log(api);
    return api;
} 

async function cityWeather(){
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=f814e82d5654bab1fd6e4f931e750f2a");
    let api = await response.json();
    console.log(api);
}
// cityWeather();

// Continent
async function continent (){
    console.log('test');
    let response = await weather();
    let temp = response.map((x)=>{
        return x.continents.join("");       
    });
    let continent = temp.filter((x,i)=> temp.indexOf(x) == i);
    let htmlContinent = document.getElementById(`dropDown-continent`);

    for (let i = 0; i < continent.length; i++){
        var x = document.createElement('option');
        x.innerHTML = `${continent[i]}`;
        x.setAttribute ("value",continent[i]);
        htmlContinent.append(x);
        console.log(continent[i]);
    }

    // Get the value of selected continent from the drop down
    let selectedContinent = htmlContinent.addEventListener("change",function(){
        console.log(htmlContinent.value);
    });
    console.log(selectedContinent);

}


// continent();
















