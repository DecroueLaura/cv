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

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//-------------------calcul de mon age-------------------------------------//
let dat = new Date("10/30/1996");
let monthDiff = Date.now()-dat.getTime();
let ageDt = new Date(monthDiff);
let year = ageDt.getUTCFullYear();
let age = Math.abs(year - 1970);
document.getElementById('age').innerHTML = age ;
// ----------------------------------------------//

// let modaux = document.getElementsByClassName("modal");

// Get the modal
let modal = document.getElementById('myModal');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
let modal5 = document.getElementById('myModal5');
// -----Modal in modal-------//
let modal21 = document.getElementById('myModal21');
let modal22 = document.getElementById('myModal22');
let modal23 = document.getElementById('myModal23');
let modal30 = document.getElementById('myModal30');
let modal31 = document.getElementById('myModal31');
let modal32 = document.getElementById('myModal32');
let modal33 = document.getElementById('myModal33');
let modal34 = document.getElementById('myModal34');
let modal35 = document.getElementById('myModal35');
let modal36 = document.getElementById('myModal36');
let modal40 = document.getElementById('myModal40');
let modal41 = document.getElementById('myModal41');
let modal42 = document.getElementById('myModal42');
let modal43 = document.getElementById('myModal43');
let modal44 = document.getElementById('myModal44');
// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('myImg');
let img2 = document.getElementById('myImg2');
let img21 = document.getElementById('myImg21');
let img22 = document.getElementById('myImg22');
let img23 = document.getElementById('myImg23');
let img3 = document.getElementById('myImg3');
let img30 = document.getElementById('myImg30');
let img31 = document.getElementById('myImg31');
let img32 = document.getElementById('myImg32');
let img33 = document.getElementById('myImg33');
let img34 = document.getElementById('myImg34');
let img35 = document.getElementById('myImg35');
let img36 = document.getElementById('myImg36');
let img40 = document.getElementById('myImg40');
let img41 = document.getElementById('myImg41');
let img42 = document.getElementById('myImg42');
let img43 = document.getElementById('myImg43');
let img44 = document.getElementById('myImg44');
let img4 = document.getElementById('myImg4');
let img5 = document.getElementById('myImg5');

img.onclick = function(){
    modal.style.display = "block";
}
img2.onclick = function(){
    modal2.style.display = "block";
}
img21.onclick = function(){
  modal21.style.display = "block";
}
img22.onclick = function(){
  modal22.style.display = "block";
}
img23.onclick = function(){
  modal23.style.display = "block";
}
img3.onclick = function(){
    modal3.style.display = "block";
}
img30.onclick = function(){
  modal30.style.display = "block";
}
img31.onclick = function(){
  modal31.style.display = "block";
}
img32.onclick = function(){
    modal32.style.display = "block";
}
img33.onclick = function(){
    modal33.style.display = "block";
}
img34.onclick = function(){
    modal34.style.display = "block";
}
img35.onclick = function(){
    modal35.style.display = "block";
}
img36.onclick = function(){
  modal36.style.display = "block";
}
img40.onclick = function(){
  modal40.style.display = "block";
  // $( "#img40 div img" ).addClass( "mySlides" );
}
img41.onclick = function(){
  modal41.style.display = "block";
}
img42.onclick = function(){
  modal42.style.display = "block";
}
img43.onclick = function(){
  modal43.style.display = "block";
}
img44.onclick = function(){
  modal44.style.display = "block";
}
img4.onclick = function(){
    modal4.style.display = "block";
}
img5.onclick = function(){
  modal5.style.display = 'block';
  carousel();
}
// ---------- carousel dessin -------//
function carousel(){
  const gap = 40;
  const carousel = document.getElementById('carousel'),
        content = document.getElementById('content'),
        next = document.getElementById('next'),
        prev = document.getElementById('prev');

        let width = carousel.offsetWidth;
        console.log(width);
        window.addEventListener("resize", e => (width = carousel.offsetWidth));
        console.log(width);

  next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if(carousel.scrollWidth !== 0){
      prev.style.display = "flex";
    }
    if(content.scrollWidth - width - gap <= carousel.scrollLeft + width){
      next.style.display = "none";
    }
  });

  prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
}

// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];
// console.log(span);
//
// span.onclick = function() {
//   modal.style.display = "none";
//   $( "#img40 div img" ).removeClass( "mySlides" );
//
// }
// ---------slider powerpoint--------//

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  console.log(x.length);

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex-1].style.display = "block";

}
// ------test carousel-----//
function myFunction1(imgs) {
  console.log("test");
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  console.log(imgText);
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
function myFunction2(imgs1) {
  console.log("22222");

  let expandImg1 = document.getElementById("expandedImg1");
  let imgText1 = document.getElementById("imgtext1");
  expandImg1.src = imgs1.src;
  imgText1.innerHTML = imgs1.alt;
  expandImg1.parentElement.style.display = "block";
}
function myFunction3(imgs2) {
  console.log("ttttt");

  let expandImg2 = document.getElementById("expandedImg2");
  let imgText2 = document.getElementById("imgtext2");
  expandImg2.src = imgs2.src;
  imgText2.innerHTML = imgs2.alt;
  expandImg2.parentElement.style.display = "block";
}
function myFunction4(imgs3) {
  console.log("ttttt");

  let expandImg3 = document.getElementById("expandedImg3");
  let imgText3 = document.getElementById("imgtext3");
  expandImg3.src = imgs3.src;
  imgText3.innerHTML = imgs3.alt;
  expandImg3.parentElement.style.display = "block";
}
function myFunction5(imgs4) {
  console.log("ttttt");

  let expandImg4 = document.getElementById("expandedImg4");
  let imgText4 = document.getElementById("imgtext4");
  expandImg4.src = imgs4.src;
  imgText4.innerHTML = imgs4.alt;
  expandImg4.parentElement.style.display = "block";
}
