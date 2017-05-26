$(document).ready(function(){
  // Show Card Composer
  $(".open-card-composer").click(function(){
    $(".card-composer").show();
  });
  // Hide Card Composer
  $(".js-cancel").click(function(){
    $(".card-composer").hide();
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
