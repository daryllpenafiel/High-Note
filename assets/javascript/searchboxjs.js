

$(document).ready(function () {

    console.log("enter");
    getResults();
   
    $(document).on("click","#spSearchButton", function () {
        document.location.href = './searchresults.html';
        var keyword2 = $("#spSearch").val();
        localStorage.setItem('keyword', keyword2);
    });


    function getResults() {

        var retrievedKeyword = localStorage.getItem('keyword');
        var searchInput = $("#search-page-search").val();

        if (!retrievedKeyword) {
            var searchInput = $("#search-page-search").val();
            var artistSearch = searchInput;
        } else {
            artistSearch = retrievedKeyword;
            localStorage.clear();
        }

        var APIkey = "STwEpnPDXERAZv6JNRKyv5EkAmxgukSN";
        var inputDate = new Date($("#dateinput").val()).getTime() / 1000;

        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=" + APIkey + "&city=Toronto&sort=date,desc" + "&keyword=" + encodeURI(artistSearch);

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {

            var display = response._embedded.events;
            var displayLength = display.length;
            $("#output-page").empty();
            $("#main-page-search").val("");

            for (i = 0; i < displayLength; i++) {
                var displayName = display[i].name;
                var displayURL = display[i].url;
                var displayIMG = display[i].images[1].url;
                var displayDate = display[i].dates.start.localDate;
                var displayVenue = display[i]._embedded.venues[0].name;
                var inputDate = $(".card-date").attr("data-date");

                var outputDiv = $("<div class='card' style='width: 20rem'>");
                var outputIMG = $("<img class='card-img-top'>").attr("src", displayIMG);
                var outputDetails = $("<div class='card-body'>");
                var cardTitle = $("<h6 class=card-title>").text(displayName);
                var outputA = $("<a class='eventlink btn btn-success'>").attr("href", displayURL).text("Go to Ticketmaster");
                var outputDate = $("<p class='card-date'>").attr("data-date", displayDate).text("Date: " + displayDate);
                var outputVenue = $("<p class='card-venue'>").text("Venue: " + displayVenue);
                outputDetails.append(cardTitle);
                outputDetails.append(outputVenue);
                outputDetails.append(outputDate);
                outputDetails.append(outputA);

                outputDiv.append(outputIMG);
                outputDiv.append(outputDetails);

                $("#output-page").prepend(outputDiv);

            }

        })
    }

    $(document).on("click", ".dropdown-genre", function () {
        //event.preventDefault();
        document.location.href = './searchresults.html';
        localStorage.clear();
        var keyword = $(this).attr("data-value");
        //console.log(keyword);
        localStorage.setItem('keyword', keyword);
        //console.log('dropdpown')
    })

})