object = [];
statz = "";
video = "";
function preload(){
video = createVideo("video.mp4");
video.hide();
}
function setup(){
canvas = createCanvas(355,355);
canvas.center();
}
function draw(){
    r = random(255);
    g = random(255);
    b = random(255);
    image(video,0,0,355,355);
    if(statz != ""){
objectDetector.detect(video, gotResult);
    }
    for(i = 0; i <object.length; i++){
        document.getElementById("stats").innerHTML = "Status: Detected Objects";
        document.getElementById("num").innerHTML = "Number of OBJECTs is" +object.length;
        fill(r,g,b);
        percent = floor(object[i].confidence * 100);       
        text(object[i].label + " " + percent + "%", object[i].x +15, object[i].y +15);
        noFill();
        stroke(r,g,b);
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
            }
}
function ready(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("stats").innnerHTML = "Status : Detecting";
}
function modelLoaded(){
console.log("hehehe thats the look of someone who won 5 times IN A ROW");
statz = true;
video.loop();
video.speed(1);
video.volume(0);
console.log("baby found")
}
function gotResult(error,results){
if(error){
console.error(error);
console.log("heheheh i win");
}
console.log(results);
console.log("Hehehe thats the expression of someone whos won 6 times in a row");
object = results;
}