const ville = document.querySelector(".display-city");
const temperature = document.querySelector(".display-temperature");
const vent = document.querySelector(".display-wind");
const humidite = document.querySelector(".display-humidity");
const valeurInput = document.querySelector(".zone")


let api_key = "641c6ee78ea1b0f09e8419189e436eef";

valeurInput.addEventListener("input",() =>{
let url = `https://api.openweathermap.org/data/2.5/weather?q=${valeurInput.value}&lang=fr&units=metric&appid=${api_key}`

fetch(url).then(response => response.json())
.then(data =>{
    console.log(data)
    ville.innerHTML =data.name  +" " + data.sys.country;
    temperature.innerHTML = Math.floor(data.main.temp) + " ° "
    vent.innerHTML = Math.floor(data.wind.speed)  + "km/h";
    humidite.innerHTML = data.main.humidity + " %";
})

});