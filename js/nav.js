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
