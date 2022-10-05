// JavaScript Document
console.log("peepee");


var mozaiekafbeelding = document.querySelector (".overig main article:first-of-type img:first-of-type")
var voorkant = document.querySelector (".overig main section:first-of-type article img:nth-of-type(2)")
var achterkant = document.querySelector (".overig main section:first-of-type article img:nth-of-type(3)")
var fotos =["mozaiek-pagina-lego/mnozaiek.jpeg", "mozaiek-pagina-lego/mozaiek-achterkant-lego.jpeg"]

// verander afbeelding van voor naar achterkant en andersom 
function voorkantShow(){
    mozaiekafbeelding.src = fotos [0];
    achterkant.style.border = "1px solid #e2d8d8";
    voorkant.style.border = "1px solid #006DB7";

}
function achterkantShow(){
    mozaiekafbeelding.src = fotos [1];
    achterkant.style.border = "1px solid #006DB7";
    voorkant.style.border = "1px solid #e2d8d8";
}

// activeer het laten zien van de afbeeldingen door erop te klikken
voorkant.addEventListener("click", voorkantShow);
achterkant.addEventListener("click", achterkantShow);

// hamburger menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
let b = document.querySelector('button');
setTimeout(()=>b.focus(), 100);
setTimeout(()=>b.blur(), 1000);