var rightwristx = 0;
var leftwristx = 0;
var wristdistance = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenetmodel = ml5.poseNet(video, modelloaded);
    posenetmodel.on("pose", getResults)
}

function modelloaded() {
    console.log("Posenet has loaded");
}

function draw() {
    background("pink");
    textSize(wristdistance);
    fill("red");
    text("Divyush", 234, 234);
}

function getResults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        rightwristx = resultsarray[0].pose.rightWrist.x;
        leftwristx = resultsarray[0].pose.leftWrist.x;
        wristdistance = floor(rightwristx - leftwristx);
    }
}