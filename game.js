window.onload = init;
//grapihcs Canvas
var gCanvas;
//2d graphics
var g2d;
var width = 854;
var height = 480;

var title = "Text Adventure"
var gameState = 0;

var characterName = '';

function init()
{
    gCanvas = document.getElementById("gameCanvas");
    gCanvas.width = width;
    gCanvas.height = height;

    g2d = gCanvas.getContext("2d");
    g2d.imageSmoothingEnabled = false;
    g2d.mozImageSmoothingEnabled = false;

    console.log("Game canvas initialized")
    draw();
}

function draw()
{
    if(gameState == 0)
    {
        g2d.font = "60px Courier New BOLD";
        g2d.fillStyle = "#ffffff";
        g2d.fillText(title, (width / 2) - (g2d.measureText(title).width / 2), 140);

        g2d.font = "24px Courier New";
        g2d.fillStyle = "#cccccc";
        g2d.fillText("1. Play Game", (width / 2) - (g2d.measureText("1. Play Game").width / 2), 300);
        g2d.fillText("2. Exit Game", (width / 2) - (g2d.measureText("2. Exit Game").width / 2), 330);
        
       
    }
    if(gameState == 1)
    {
        g2d.font = "40px Courier New";
        g2d.fillStyle = "#ffffff";
        g2d.fillText("Thanks for playing", (width / 2) - (g2d.measureText("Thanks for playing").width / 2), 100);
        
        g2d.font = "24px Courier New";
        g2d.fillStyle = "#ffffff";
        g2d.fillText("Made By Adam Facey", (width / 2) - (g2d.measureText("Made By Adam Facey").width / 2), 340); 
    
    //wanting to add picture with google chrome
    /*var image name = new Image;
    image.onload = function()
    {
       g2d.drawImage(image name, (width /2) - (image name.width / 2), 130);
       // to be centred 
    }
    image.src = "file path";*/
    }
    if(gameState == 2)
    {
        g2d.font = "24px Courier New";
        g2d.fillStyle = "#ffffff";
        g2d.fillText("What is your name", (width / 2) - (g2d.measureText("What is your name").width / 2), 240);    
    }
    if(gameState == 3)
    {
        g2d.font = "24px Courier New";
        g2d.fillStyle = "#ffffff";
        g2d.fillText("Are you sure " + characterName +  " is right", (width / 2) - 
        (g2d.measureText("Are you sure " + characterName + " is right").width / 2), 240);
    }


     var input = new CanvasInput(
            {
                canvas: gCanvas,
                x: 10,
                y: 450,
                width: width - 20,
                backgroundColor: '#000000',
                borderWidth: 0,
                boxShadow: "0px 0px 0px rgba (255, 255, 255, 1)",
                selectionColor: '#ffffff',
                fontColor: '#ffffff',
                fontSize: 16,
                fontFamily: "Courier New",
                placeHolder: 'Enter choice here...',
                onsubmit: function()
                {
                    var choice = input._value;
                    if(gameState == 0)
                    {
                        if(choice == "1")
                        {
                            enterState(1);
                        }
                        else if(choice == "2")
                        {
                            enterState(0);
                        }
                    }
                    else if(gameState == 1)
                    {
                        if(choice == "reset" || choice == "Reset" || 
                        choice == "play again" || choice == "Play again")
                        {
                            enterState(0);
                        }
                        else if(choice == "player") 
                        {
                            enterState(2)
                        }   
                    }
                    else if(gameState == 2)
                    {
                       if(choice != null)
                       {
                            characterName = choice;
                            enterState(3);
                       } 
                        
                    }
                }
               
            }
        );
        input.focus();

    console.log("Game" + gameState + "drawn successfully")
 
}

function enterState(state)
{
    gameState = state;
    clearCanvas(g2d, gCanvas);
    draw();
}
 
function clearCanvas(context, canvas)
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
}