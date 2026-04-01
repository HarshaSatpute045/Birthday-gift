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

// startFireworks();
// startSlider();
// createAgeFireworks();

// startGalaxy();
// startFireworks();
// startSlider();
// createAgeFireworks();
// createHearts();
// createBalloons();
// playMusic();
// typeMessage();


startGalaxy();
startFireworks();
createHearts();
createBalloons();
typeMessage();
showBirthdayText();
drawNameFireworks();



function showBirthdayText(){
    gsap.to("#birthdayText", {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.5)"
    });
}
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

ctx.font="20px Arial";
ctx.fillText("❤️",x,y);

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

function createHearts(){

let hearts=document.querySelector(".hearts");

setInterval(function(){

let heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(15+Math.random()*25)+"px";
heart.style.animationDuration=(3+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},300);

}

function startFireworks(){

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

function createExplosion(){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height;

for(let i=0;i<40;i++){

particles.push({
x:x,
y:y,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:100
});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fill();

if(p.life<=0){
particles.splice(index,1);
}

});

requestAnimationFrame(animate);

}

setInterval(createExplosion,1200);

animate();

}

function createBalloons(){

let container=document.querySelector(".balloons");

setInterval(function(){

let balloon=document.createElement("div");

balloon.classList.add("balloon");
balloon.innerHTML="🎈";

balloon.style.left=Math.random()*100+"%";
balloon.style.animationDuration=(6+Math.random()*4)+"s";

container.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},8000);

},800);

}

function playMusic(){

let music=document.getElementById("music");

music.volume=0.5;

music.play();

}


function openGift(){

let gift=document.querySelector(".gift");
let msg=document.querySelector(".message");

gift.classList.add("open");

msg.innerHTML="🎁 Surprise! <br> Happy Birthday ❤️ <br> May your day be filled with happiness, love and beautiful moments 🎉";

}

function typeMessage(){

let text="You make every day brighter. Happy Birthday ❤️";
let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);
i++;

setTimeout(typing,50);

}

}

typing();

}



function startFireworks(){

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

function explosion(){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height;

for(let i=0;i<50;i++){

particles.push({

x:x,
y:y,
vx:(Math.random()-0.5)*8,
vy:(Math.random()-0.5)*8,
life:100

});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";

ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

setInterval(explosion,1200);

animate();

}

function startGalaxy(){

const canvas=document.getElementById("galaxy");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<200;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(star=>{

ctx.beginPath();
ctx.arc(star.x,star.y,star.size,0,Math.PI*2);
ctx.fill();

star.y+=0.5;

if(star.y>canvas.height){
star.y=0;
}

});

requestAnimationFrame(animate);

}

animate();

}

function showBirthdayText(){

setTimeout(function(){

document
.getElementById("birthdayText")
.classList.add("show-text");

},3000);

}



function drawNameFireworks(){

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.font="80px Arial";
ctx.fillStyle="white";
ctx.textAlign="center";

let text="Happy Birthday ❤️";

let particles=[];

for(let i=0;i<200;i++){

particles.push({
x:canvas.width/2,
y:canvas.height/2,
vx:(Math.random()-0.5)*10,
vy:(Math.random()-0.5)*10,
life:100
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillText(text,canvas.width/2,canvas.height/2);

particles.forEach((p,index)=>{

p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

}

function blowCandles(){

let flames=document.querySelectorAll(".flame");

flames.forEach(f=>{

f.classList.add("off");

});

alert("Make a wish 🎉");

}


function startConfetti(){

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let confetti=[];

for(let i=0;i<150;i++){

confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5+2,
speed:Math.random()*3+2
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";

ctx.fillRect(c.x,c.y,c.size,c.size);

c.y+=c.speed;

if(c.y>canvas.height){
c.y=0;
}

});

requestAnimationFrame(animate);

}

animate();

}


// gsap animation


gsap.from("#birthdayText", {
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1, 0.5)"
});


gsap.from(".gallery img", {
  y: 100,           // neeche se start
  opacity: 0,
  duration: 1.5,
  delay:1,
  stagger: 0.3,     // ek-ek karke
  ease: "bounce.out", // upar-neeche bounce effect
  scale:1        // thoda chhota se start
});

gsap.from(".cake3d", {
  y: -100,
  rotation: 360,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1.7)"
});

gsap.from(".gift", {
  y: -50,
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "elastic.out(1, 0.5)",
  repeat: -1,
  yoyo: true
});


gsap.to(".hearts span", {
  y: "+=110vh",
  rotation: 360,
  duration: 6,
  ease: "linear",
  stagger: 0.1,
  repeat: -1
});

gsap.to(".balloon", {
  y: "-=120vh",
  duration: 8,
  ease: "linear",
  stagger: 0.3,
  repeat: -1
});



gsap.to(" .gallery img",
    {
        y:"-=20",
        duration:2,
        ease:"power1.inOut",
        yoyo:true,
        repeat:-1,
        stagger:0.3
    }
);


// gsap.to(".gallery img",
//     {
//         y:-50,
//         stagger:
//         {
//             each:0.15,
//             from:0,
//             amount:1,
//             grid:"auto",
//             ease:"power2.inOut"
//         },
//         duration:1,
//         ease:"power2.out"
//     }
// );



function resizeCanvas(canvas){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", ()=>{
    resizeCanvas(document.getElementById("fireworks"));
    resizeCanvas(document.getElementById("galaxy"));
    resizeCanvas(document.getElementById("confetti"));
});




gsap.from(".gallery img", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay:1,
  stagger: window.innerWidth < 600 ? 0.15 : 0.3,
  ease: "bounce.out",
  scale:1
});


function showBirthdayText(){
    gsap.to("#birthdayText", {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.5)"
    });
}