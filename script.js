

const key = "96fd461aa522fc01587be1d1c9762546"


function appearData(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".txt-prev").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade em " + data.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){

    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&lang=pt_br" + "&units=metric")
    .then(resposta => resposta.json())

    appearData(data)
}

function clickButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}

