(function(){

  $("button").click(function(){
    var url = 'http://192.168.1.21:3000/places';

    $.ajax(url).done(ajaxDone).fail(ajaxFail); 

    $.ajaxDone(function(response){
      var place = response.places;
      console.log(places);
      for(var i = 0; i<result.places.length; i++){
        var place = place.places[i];
        console.log(place);
        var newElement = "<li>" + place.nom +"</li";
        
};
})();
//       $('span').html(result)
//       if(place.nom === IoT Valley){
//         var password = place.password;


}
//       }
//     }

//   })    

// })
// .fail(function() {
//        // alert("error");
//      })
// .always(function() {
//         //alert("complete");

// Attention ça ne marche pas pour le moment !!!!!!