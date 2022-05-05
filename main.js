img = ""
function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw(){
    image(canvas, 0, 0, 700, 500)
}
function start(){
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
}
function modelLoaded(){
    console.log("modelLoaded")
}