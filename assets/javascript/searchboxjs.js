$(window).ready(function () {

    var artistSearch;
    var retrievedKeyword = localStorage.getItem('keyword');

    getResults();

    function getResults() {

        if (retrievedKeyword) {
            artistSearch = retrievedKeyword;
            console.log(artistSearch);
            localStorage.clear();
        } else if (!retrievedKeyword) {
            artistSearch = $("#search-page-search").val();
            console.log(artistSearch);
        }

        //pass in parameter for getResults function
        //oninputchjange => getresult (localstorege)

        console.log(artistSearch);
        var APIkey = "STwEpnPDXERAZv6JNRKyv5EkAmxgukSN";
        var inputDate = new Date($("#dateinput").val()).getTime() / 1000;

        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=" + APIkey + "&city=Toronto&sort=date,desc" + "&keyword=" + encodeURI(artistSearch);
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            if (!response) {
                var errorP = $('<p>').text("Sorry no results found. Try another search");
                $("#output-page").append(errorP);
            } else {
                $("#output-page").empty();
                $("#main-page-search").val("");

                var display = response._embedded.events;
                var displayLength = display.length;

                for (i = 0; i < displayLength; i++) {
                    var displayName = display[i].name;
                    var displayURL = display[i].url;
                    var displayIMG = display[i].images[1].url;
                    var displayDate = display[i].dates.start.localDate;
                    var inputDate = $(".card-date").attr("data-date");
 

                    var outputDiv = $("<div class='card' style='width: 20rem'>");
                    var outputIMG = $("<img class='card-img-top'>").attr("src", displayIMG);
                    var outputDetails = $("<div class='card-body'>");
                    var cardTitle = $("<h6 class=card-title>").text(displayName);
                    var outputA = $("<a class='eventlink btn btn-success'>").attr("href", displayURL).text("Go to Ticketmaster");
                    var outputDate = $("<h6 class='card-date'>").attr("data-date", displayDate).text(displayDate);
                    outputDetails.append(cardTitle);
                    outputDetails.append(outputDate)
                    outputDetails.append(outputA);

                    outputDiv.append(outputIMG);
                    outputDiv.append(outputDetails);
                    //addWeather();

                    $("#output-page").prepend(outputDiv);
  
                }
            }
        })

        $("#submitbutton").on("click", getResults);

        $(document).on("click", ".dropdown-genre", function () {
            event.preventDefault();
            document.location.href = './searchresults.html';
            localStorage.clear();
            var keyword = $(this).attr("data-value");
            console.log(keyword);
            localStorage.setItem('keyword', keyword);
        })

        /*function addWeather() {
            var APIkey = "db1f13174ea9e50874eb00cef8b7d022";
            var stage = "43.629245900,-79.415239300";
            var inputDate = $(".card-date").attr("data-date");
            console.log(inputDate);

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var forecast = response.daily.data[0];
                var date = forecast.time;
                var forecast = response.daily.data[0];
                var overview = forecast.summary;
                var temperature = forecast.temperatureHigh;
                var humidity = forecast.humidity;
                var icon = forecast.icon;

                return(temperature);
                

                var skycons = new Skycons({
                    "color": "green"
                });
                skycons.add("icon1", icon);
                skycons.play();
            })
        }*/
    }
})