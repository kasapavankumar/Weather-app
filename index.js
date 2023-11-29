
const inputBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-img");
const temperature=document.querySelector(".temp");
const cityName=document.querySelector(".city");
const humidityDetails=document.querySelector(".humidity-value");
const windDetails=document.querySelector(".wind-value");

async function checkWeather(city){
    const apiKey="d303ecf76569d1d5e6fda754529916bf";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weather_data=await fetch(`${apiUrl}`).then
    (response => response.json());


    if (weather_data.cod===`404`){
        document.querySelector(".error").style.display="flex";
        document.querySelector(".container").style.visibility="hidden";
        document.querySelector(".search").style.marginTop="10px";
        document.querySelector(".card").style.height="400px"
    }
    else{
        document.querySelector(".card").style.height="550px"
        document.querySelector(".error").style.display="none";
        document.querySelector(".container").style.visibility="visible";
        document.querySelector(".search").style.marginTop="10px";
    }

    cityName.innerHTML=weather_data.name;
    temperature.innerHTML=Math.round(weather_data.main.temp)+"°C";
    humidityDetails.innerHTML=weather_data.main.humidity + "%";
    windDetails.innerHTML=weather_data.wind.speed + " km/h";
    switch (weather_data.weather[0].main){
        case "Clouds":
            weatherImg.src="./images/clouds.png";
            break;
        case "Mist":
            weatherImg.src="./images/mist.png";
            break;
        case "Clear":
            weatherImg.src="./images/clear.png";
            break;
        case "Rain":
            weatherImg.src="./images/rain.png";
            break;
        case "Dizzle":
            weatherImg.src="./images/dizzle.png";
            break;
        case "Snow":
            weatherImg.src="./images/snow.png";
            break;
    }
 
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});
