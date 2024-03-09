const apiKey="c43d5fbd80de24722c4a87bad637d42b";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox=document.querySelector(".name input");
        const searchButton=document.querySelector(".name button");

        async function checkWeather(cityName){
            const response =await fetch(apiUrl + cityName +`&appid=${apiKey}`);
            var data=await response.json();

            console.log(data);

            let city=document.querySelector(".city");
            let temperature = document.querySelector(".temp");
            let humidity=document.querySelector(".humidity");
            let wind=document.querySelector(".wind");

            

            if(data.name == undefined){
                alert("INVALID CITY NAME");
                return;
            }
            city.innerHTML = data.name;
            temperature.innerHTML = Math.round(data.main.temp) + "°C";
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = data.wind.speed + "km/h";

            let condition=data.weather[0].main.toLowerCase();
            let image = `${condition}.png`;
            let icon = document.querySelector(".weather_icon");
            weather_icon.onerror = function(){
                weather_icon.src="images/clear.png";
            }
            weather_icon.src="images/"+image;

        }
        checkWeather("Kurnool");
        searchButton.addEventListener("click",()=>{
            checkWeather(searchBox.value);}
        )