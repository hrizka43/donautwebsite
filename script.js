function showMenu(){
document.getElementById("home").style.display="none";
document.getElementById("menu").style.display="block";
}

function showHome(){
document.getElementById("menu").style.display="none";
document.getElementById("home").style.display="grid";
}

function orderNow(){
alert("Donut berhasil dipesan! 🍩");
}

function changeDonut(type){
let img=document.getElementById("heroDonut");

if(type=="pink") img.src="images/pink.png";
if(type=="blue") img.src="images/blue.png";
if(type=="choco") img.src="images/coklat.png";

img.style.animation="none";
img.offsetHeight;
img.style.animation="fadeInRight 0.8s ease-out, floatDonut 4s ease-in-out infinite";

showHome();
}


showHome();

function showAbout(){
document.getElementById("home").style.display="none";
document.getElementById("menu").style.display="none";
document.getElementById("about").style.display="block";
document.getElementById("contact").style.display="none";
}

function showContact(){
document.getElementById("home").style.display="none";
document.getElementById("menu").style.display="none";
document.getElementById("about").style.display="none";
document.getElementById("contact").style.display="block";
}
img.style.animation="none";
img.offsetHeight;
img.style.animation="fadeInRight 0.8s ease-out, floatDonut 4s ease-in-out infinite";
