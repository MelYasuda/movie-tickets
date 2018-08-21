// business logic
function Ticket(age,movie,time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
}

// var ticket = function (newTciket) {
//   if(newTicket === 2) {
//     return
//   } if else (newTicket === 3){
//     return
//   } if else (newTicket === 4){
//     return
//   } if else (newTicket === 5){
//     return
//   }
//
// }

var ticket = function (newTicket) {
  if(newTicket.ageInput === 0 && newTicket.movie === 2 && newTicket.timeInput === 1 ) {
    return "$6"
  }

  // if else (newTicket === 3){
  //   return
  // } if else (newTicket === 4){
  //   return
  // } if else (newTicket === 5){
  //   return
  // }

});


// user interface
$(document).ready.(function(){
  $("#movieSubmit").submit(function(event) {
  event.preventDefault();

  var ageInput = $("#age").val();
  var movieInput = $("#movie").val();
  var timeInput = $("#time").val();

  var newTicket = new Ticket(ageInput, movieInput, timeInput);

  $("#price").append(newTciket);

  });
});
