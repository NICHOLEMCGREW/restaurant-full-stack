//Alert Box Display Success/Failure
window.onload = function() {
   const urlParams = new URLSearchParams(window.location.search)

   if (urlParams.has('success')) {
      alert('Reservation successful')
   } else if (urlParams.has('error')) {
      alert('There was an error in making the reservation. Please call 555-555-5555')
   }
}

// Tabbed Menu
function openMenu(event, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {  // This should be tablinks.length
       tablinks[i].classList.remove("active-tab");  // Using classList for better readability
    }
    
    document.getElementById(menuName).style.display = "block";
    event.currentTarget.classList.add("active-tab");  // Using classList for better readability
  }
  
  document.getElementById("mainLink").click(); // Auto-clicks the Pizza tab when the page loads