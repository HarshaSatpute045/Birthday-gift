function startSurprise(){

let text="Happy Birthday 🎉 May your day be full of joy ❤️";

let i=0;

let message=document.getElementById("message");

message.innerHTML="";

let typing=setInterval(function(){

if(i<text.length){

message.innerHTML+=text.charAt(i);

i++;

}else{

clearInterval(typing);

}

},60);

startFireworks();
startSlider();
createAgeFireworks();

}

/* canvas fireworks */

function startFireworks(){

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function drawFire(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<20;i++){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height;

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";

ctx.beginPath();
ctx.arc(x,y,4,0,Math.PI*2);
ctx.fill();

}

requestAnimationFrame(drawFire);

}

drawFire();

}

/* slider */

let photos=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg"
];

let index=0;

function startSlider(){

document.querySelector(".reel").style.display="block";

setInterval(function(){

index++;

if(index>=photos.length){
index=0;
}

document.getElementById("slide").src=photos[index];

},2000);

}

/* cake */

function cutCake(){

document.querySelector(".cake3d").innerHTML="🍰 21";

}

/* letter open */

function openLetter(){

document.getElementById("letter").classList.add("show");

/* food section show */

document.querySelector(".food-section").style.display="block";

}

/* letter close */

function closeLetter(){

document.getElementById("letter").classList.remove("show");

}


function createAgeFireworks(){

let age=document.getElementById("age");

setInterval(function(){

for(let i=0;i<6;i++){

let spark=document.createElement("div");

spark.classList.add("spark");

spark.style.left=Math.random()*100+"px";
spark.style.top=Math.random()*50+"px";

age.appendChild(spark);

setTimeout(()=>{
spark.remove();
},1000);

}

},1500);

}



// function openCurtain(){

// let curtain=document.getElementById("curtain");

// curtain.classList.add("open");

// setTimeout(function(){

// curtain.style.display="none";

// },1500);

// }

function openCurtain(){

let curtain=document.getElementById("curtain");

curtain.classList.add("open");

setTimeout(function(){

document.getElementById("intro").style.display="none";

document.getElementById("startBtn").style.display="inline-block";

},1500);

}


function createConfetti(){

let confetti=document.querySelector(".confetti");

for(let i=0;i<50;i++){

let piece=document.createElement("span");

piece.style.left=Math.random()*100+"%";

piece.style.background="hsl("+Math.random()*360+",100%,50%)";

piece.style.animationDuration=(2+Math.random()*3)+"s";

confetti.appendChild(piece);

}

}

