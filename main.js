song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){

    song  = loadSound("music.mp3");
    song2  = loadSound("music2.mp3");

}

function setup(){

    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}
function draw(){

    image(video, 0, 0, 500, 500);

}

function modelLoaded(){

    console.log("The model Has been loaded");

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x = " + leftWristX);
        console.log("left wrist y = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + rightWristX);
        console.log("right wrist y = " + rightWristY);

    }
}