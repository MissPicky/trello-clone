$(document).ready(function(){
  // Show Card Composer
  $("#open-card-composer1").click(function(){
    $("#card-composer1").show();
  });
  $("#open-card-composer2").click(function(){
    $("#card-composer2").show();
  });
  $("#open-card-composer3").click(function(){
    $("#card-composer3").show();
  });
  // Hide Card Composer
  $("#js-cancel1").click(function(){
    $("#card-composer1").hide();
  });
  $("#js-cancel2").click(function(){
    $("#card-composer2").hide();
  });
  $("#js-cancel3").click(function(){
    $("#card-composer3").hide();
  });
  // Add Card
  $("#add1").click(function(){
    var content1 = $("#content1").val();
    $("#cards1").append('<div class="list-card"><i class="fa fa-pencil list-card-operation" aria-hidden="true"></i><div class="list-card-details"><a class="list-card-title" dir="auto" href="#">' + content1 + '</a></div> <!-- list-card-details --></div>')
  });
  $("#add2").click(function(){
    var content2 = $("#content2").val();
    $("#cards2").append('<div class="list-card"><i class="fa fa-pencil list-card-operation" aria-hidden="true"></i><div class="list-card-details"><a class="list-card-title" dir="auto" href="#">' + content2 + '</a></div> <!-- list-card-details --></div>')
  });
  $("#add3").click(function(){
    var content3 = $("#content3").val();
    $("#cards3").append('<div class="list-card"><i class="fa fa-pencil list-card-operation" aria-hidden="true"></i><div class="list-card-details"><a class="list-card-title" dir="auto" href="#">' + content3 + '</a></div> <!-- list-card-details --></div>')
  });

}); // Document Ready


//My Modal

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that closes the modal
var btn = document.getElementById("closeModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// open the modal when the site is loaded
window.onload = function() {
    modal.style.display = "block";
}

// When the user clicks on the button, close the modal
btn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
