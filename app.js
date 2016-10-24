$(function(data) {
  $('button').click(function(){
    $.ajax('http://192.168.1.21:3000/places',function(data){
      $('span').html(data);
      })
      .done(function() {
        alert( 'success' );
      })
      .fail(function() {
        alert( 'error' );
      })
      .always(function() {
        alert( 'complete' );
      });
    });
  });
