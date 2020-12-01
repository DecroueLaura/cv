function openNav() {
  document.getElementById("nav").style.width = "12%";
  document.getElementById("body").style.marginLeft = "12%";
  document.getElementById("open").style.display = "none";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("nav").style.width = "0";
  document.getElementById("body").style.marginLeft = "0";
  document.getElementById("open").style.display = "block";
}

// function openCity(event, cityName) {
//   // Declare all variables
//   var i, tabcontent, subcontent, sublinks, tablinks;
//
//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

  // subcontent = document.getElementsByClassName("subcontent");
  // console.log(subcontent);
  // for (i = 0; i < subcontent.length; i++) {
  //   subcontent[i].style.display = "none";
  // }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//
//   // Get all elements with class="sublinks" and remove the class "active"
//   sublinks = document.getElementsByClassName("sublinks");
//   for (i = 0; i < sublinks.length; i++) {
//     sublinks[i].className = sublinks[i].className.replace(" active", "");
//   }
//
//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(cityName).style.display = "block";
//   event.currentTarget.className += " active";
// }
//
// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
