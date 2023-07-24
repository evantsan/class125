noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0
function preload()
{

}
function setup()
{
    canvas = createCanvas(700,600);
    canvas.position(200,225);
    video = createCapture(VIDEO);
    video.position(1100,225);
    video.size(700,600)
    p = ml5.poseNet(video, modelLoaded);
    p.on('pose',gotPoses);
}
function draw()
{
    image(canvas,0,0,700,600);
    background('white');
    fill('green');
    stroke('green');
    square(noseX,noseY,difference);
    document.getElementById('wh').innerHTML = "Width and Height of the square is "+difference+" px."
}
function modelLoaded()
{
    console.log('model has been loaded successfully')
}
function gotPoses(results)
{
 if(results.length > 0)
 {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+noseX+"noseY = "+noseY);

    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX-rightwristX);
    console.log("leftwristx = "+leftwristX+" rightwristx = "+rightwristX+" difference = "+difference);
 }
}