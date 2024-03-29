let weather = {
    "apiKey": " YOUR API KEY HERE ",
    getWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
    },
    showWeather: function (data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function() {
        this.getWeather(document.querySelector(".searchBox").value);
    }
};

document.querySelector(".searchButton").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchBox").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        weather.search();
    }
});