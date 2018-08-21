// business logic
function Ticket(age,movie,time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
}
var ages = {"young":0, "middle":+2, "old":0}
var movies = {"mile22":8, "alpha":8, "missionImpossible":10}
var times = {"early":0, "late":+2}

Ticket.prototype.ticketPrice = function(){
  return ages[this.age] + movies[this.movie] + times[this.time]
};

// user interface
$(document).ready(function(){
  $("form#movieSubmit").submit(function(event) {
  event.preventDefault();

  var ageInput = $("#age").val();
  var movieInput = $("#movie").val();
  var timeInput = $("#time").val();
  var newTicket = new Ticket(ageInput, movieInput, timeInput);
  $("#price").text("");
  $("#price").append(" $" + newTicket.ticketPrice());

  });
});
