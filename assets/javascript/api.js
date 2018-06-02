

function TicketMaster(){

var queryURL= "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=527&apikey=pgJ6dICsI0gxvL7bAgiXrKr7p2I7pfZc"


$.ajax({
    
    url: queryURL,
    method: "GET",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                var results = json._embedded.events;
   
                for( var i = 0; i < results.length; i++) {

                var ConcertImage = $('<img src="'+ results[i].images[1].url +'">' );
                $("#Hot").replaceWith(ConcertImage);
                 
               var ConcertName=$('<h4>'+ results[iw].name + '</h4>');

               $("#Title").replaceWith(ConcertName);
             
              
                }
                
                console.log(results);
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });




};





TicketMaster();