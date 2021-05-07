canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
backgroundImage="mars.jpg";
roverimg="rover.png";
roverX=10;
roverY=10;
roverwidth=100;
roverheight=100;
function move(){
    backgroundimg=new Image();
    backgroundimg.onload= addmars;
    backgroundimg.src=backgroundImage;
    roverimage=new Image();
    roverimage.onload= addrover;
    roverimage.src=roverimg;
}
function addmars(){
    ctx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);
}
function addrover(){
    ctx.drawImage(roverimage,roverX,roverY,roverwidth,roverheight);
}
window.addEventListener("keydown",keydownfunction);
function keydownfunction(a){
keypressed=a.keyCode;
console.log(keypressed);
if(keypressed=='38'){
    up();
    console.log("up");
  }
  if(keypressed=='40'){
    down();
    console.log("down");
  }
  if(keypressed=='37'){
    left();
    console.log("left");
  }
  if(keypressed=='39'){
     right();
    console.log("right");
  }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        addmars();
        addrover();
        console.log("when up arrow is pressed, the x position of rover="+roverX+" -y position of rover"+roverY);
    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
        addmars();
        addrover();
        console.log("when down arrow is pressed, the x position of rover="+roverX+" -y position of rover"+roverY);
    }
}
function left(){
    if(roverX>=0){
        roverX=roverX-10;
        addmars();
        addrover();
        console.log("when left arrow is pressed, the x position of rover="+roverX+" -y position of rover"+roverY);
    }
}
function right(){
    if(roverX<=700){
        roverX=roverX+10;
        addmars();
        addrover();
        console.log("when right arrow is pressed, the x position of rover="+roverX+" -y position of rover"+roverY);
    }
}