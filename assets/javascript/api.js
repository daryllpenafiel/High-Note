

function TicketMaster() {

  var genresQuery = ["KnvZfZ7vAeA", "KnvZfZ7vAvF", "KnvZfZ7vAvE", "KnvZfZ7vAv1", "KnvZfZ7vAvt"]

  for (var i = 0; i < genresQuery.length; i++) {
    var NewQuery = genresQuery[Math.floor(genresQuery.length * Math.random())];
  };

  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?ClassificationName=Music&GenreId=" + NewQuery + "&sort=date,asc&keyword=&includeFamily=no&dmaId=527&apikey=pgJ6dICsI0gxvL7bAgiXrKr7p2I7pfZc"


  $.ajax({

    url: queryURL,
    method: "GET",
    async: true,
    dataType: "json",
    success: function (json) {
      console.log(json);
      // Parse the response.
      var results = json._embedded.events;


      for (var i = 0; i < results.length; i++) {

        var ConcertImage = $('<img src="' + results[i].images[1].url + '">');
        $("#Hot").replaceWith(ConcertImage);

        var DateTime = $('<p>' + results[i].dates.start.localDate + '</p>');
        var ConcertName = $('<h4>' + results[i].name + '</h4>');

        DateTime.addClass("concertDate");
        $("#Title").replaceWith(ConcertName);
        $("#date").replaceWith(DateTime);
      
      


        $("#hyperlink").attr("href","./samplepage1.html");
        $("#hyperlink1").attr("href","./samplepage1.html");
        $("#hyperlink2").attr("href","./samplepage1.html");
        $("#hyperlink3").attr("href","./samplepage1.html");
        $("#hyperlink4").attr("href","./samplepage1.html");
        $("#hyperlink5").attr("href","./samplepage1.html");
        $("#hyperlink6").attr("href","./samplepage1.html");
        $("#hyperlink7").attr("href","./samplepage1.html");
        $("#hyperlink8").attr("href","./samplepage1.html");
        $("#hyperlink9").attr("href","./samplepage1.html");
      

      
        if (results[i]){
         
          $("#NewName").replaceWith(results[i].name);
            }else{ if (i===1){
              $("#NewName").replaceWith(results[i].name);
              
            };
          };


        
        };
        




      

      console.log(results);

      // Do other things.
    },
    error: function (xhr, status, err) {
      // This time, we do not end up here!
    }
  });




};
TicketMaster();




// function HyperDirect() {

//   var idLoop = ["'#hyperlink'", "'#hyperlink1'", "'#hyperlink2'", "'#hyperlink3'", "'#hyperlink4'", "'#hyperlink5'", "'#hyperlink6'", "'#hyperlink7'", "'#hyperlink8'", "'#hyperlink9'"]

//   for (var i = 0; i < idLoop.length; i++) {

    


//     $("#Hot").on('click', "idLoop[i]", function () {
     
// $("#NewName").replaceWith(results[i].name);


//     })
//   }
// };

// HyperDirect();





