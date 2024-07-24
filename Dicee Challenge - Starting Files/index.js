var random1=Math.floor(Math.random()*6)+1;
var dicename="images/dice"+random1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dicename);
var random2=Math.floor(Math.random()*6)+1;
var dicename="images/dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dicename);
if(random1>random2)
    {
        document.querySelector("h1").innerText="Player1 Wins the Toss";

    }
    if(random2>random1)
        {
            document.querySelector("h1").innerText="Player2 Wins the Toss";
    
        }

        if(random1==random2)
            {
                document.querySelector("h1").innerText="Draw";
        
            }
        