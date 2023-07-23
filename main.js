

function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 550);
    canvas.position(600,125);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function draw(){
    background('#8e79f7')
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}