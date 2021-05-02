"use strict";

$(document).ready(function() {


    //10 Marks  for jQuery plug in

    $('#switch_btn').click(function() {
        if ($('body').hasClass('active')) {
            $('body').removeClass('active');
            ($('#switch_btn').addClass('inactive'));
            ($('#switch_btn').removeClass('active'));

        } else {
            $('body').addClass('active');
            ($('#switch_btn').addClass('active'));
            ($('#switch_btn').removeClass('inactive'));

        }
    });

});



//5 Marks  for using comments
//2 Marks for using querySelector
//Clock
const body = document.querySelector(".body");
const clock = document.querySelector(".clock");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

//2 Marks  for jQuery plug in
function setDate() {
    const now = new Date;

    //5 Marks  for creating Date object   
    //Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //Minutes
    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    //Seconds
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}
//15 Marks for using 10 jQuery methods
setInterval(setDate, 1000);

//10 Marks  for using a 3rd party API 
function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Waterloo&appid=2959361a7efa97a4a6f88bf074109176&units=imperial')
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log(res, 'res');
            console.log(res.name);
            // console.log(res.name);
            // console.log(res.weather[0]);
            // console.log(res.main);
            // console.log(res.wind);
            // const _weather = $('.weather');
            // _weather.innerHTML = res.weather[0];
            $('.weatherReport h4').html(res.name + "'s weather");
            $(".weather").html(res.weather[0].main);
            $(".temp").html(res.main.temp + "&deg;F");
            $(".wind").html(res.wind.speed + "m/h");
            console.log(res.weather[0].icon);

            // 10 marks for Use a switch statement 
            switch (res.weather[0].icon) {
                case "10d":
                    $(".weather").css("background-image", "url(images/clear.png)");

                    break;
                case "Mist":
                    $(".weather").addClass("weather-cloudy");

                    break;
                // case "cloudy":

                //             break;
                // case "cloudy":

                //                 break;

                default:
                    break;
            }
        });
}
getWeather();

//Total score for this page is: 49
//Whole score: 42+49+30=121