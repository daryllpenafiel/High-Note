$(document).ready(function(){

    var APIkey = "db1f13174ea9e50874eb00cef8b7d022";
    var stage = "43.639330776,-79.37416517";
    //var inputDate=new Date($("#dateinput").val()).getTime()/1000;
    var inputDate = parseInt(1536537600+86400);
    var queryURL =  "https://api.darksky.net/forecast/" + APIkey + "/" + stage +  "," + inputDate + "?units=si";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var forecast = response.daily.data[0];
            var date = forecast.time;
            var forecast = response.daily.data[0];
            var overview = forecast.summary;
            var temperature = forecast.temperatureHigh;
            var humidity = forecast.humidity;
            var icon = forecast.icon;
        
        //$("#exampleweather").append(overview);
        $("#aow-weather").append(temperature + " C");
        //$("#humidity").text(humidity);
        //$("#dateexample").text(timeConverter(date));
        
        var skycons = new Skycons({"color": "green"});
        skycons.add("icon3",icon);
        skycons.play();
        })
        
    })