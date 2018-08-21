// business logic
function Ticket(age,movie,time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
}



// user interface
$(document).ready.(function(){
  $("#movieSubmit").submit(function(event) {
  event.preventDefault();

  var ageInput = $("#age").val();
  var movieInput = $("#movie").val();
  var timeInput = $("#time").val();

  var newTicket = new Ticket(ageInput, movieInput, timeInput);


  });
});
