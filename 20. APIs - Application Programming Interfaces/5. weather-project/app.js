const express = require('express');
const https = require('https');

const app = express();

app.get("/", function(req, res){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Dhaka,bd&APPID=c439a984044b3db5361d53f1f8d3e5f0&units=metric';
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            // console.log(weatherData);

            const temp = weatherData.main.temp;
            // console.log(temp);
            const weatherDescription = weatherData.weather[0].description;
            // console.log(weatherDescription);
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in Dhaka is " + temp + " degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">")
            res.send();

            // stringify
            // const object = {
            //     name: "Ayon",
            //     food: "Nasta"
            // }
            // console.log(JSON.stringify(object));
        })
    });

});


app.listen(3000, function(){
    console.log("Server running on port 3000");
});