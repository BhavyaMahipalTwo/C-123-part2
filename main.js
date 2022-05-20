function setup(){
video = createCapture(VIDEO);
video.size(600, 500);
video.position(150, 130);

canvas = createCanvas(550, 500);
canvas.position(800, 130);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Model Is loaded!");
}

function draw() {
    background("#D3D3D3");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
