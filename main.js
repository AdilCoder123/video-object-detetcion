function setup()
{
    canvas=createCanvas(550,300);
    canvas.center();
    video.hide()
    
}
video="";
cuurentstatus=""
object=[];
function preload(){
video=createVideo('video.mp4')

}
function draw()
{
    image(video,0,0,550,300)

    if (cuurentstatus != "")
    {
        objectDetector.detect(video,gotResult);

        for(i=0; i<object.length; i++)
        {
document.getElementById("status").innerHTML="status:objects detected"
document.getElementById("no.objects").innerHTML="objects detected are"+object.length;

fill("black");
percent=floor(object[i].confidence * 100);
text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("black");
rect(object[i].x,object[i].y,object[i].width,object[i].height);


        }
    }


}

function startnow()
{
   objectDetector=ml5.objectDetector('cocossd',modelloaded); 
   document.getElementById("status").innerHTML="Status:Detecting objects..."
}

function gotResult(error,results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    object = results;
}


function modelloaded()
{
    console.log("cocossd is working");
    cuurentstatus=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
    
