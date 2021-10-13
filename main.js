function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,520);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#18ba43');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}