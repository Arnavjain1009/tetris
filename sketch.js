var splashscreen
var playbutton
var aboutbutton
var gameState = "wait"
var level1;
 
  const board = [];
var shapes = [
    [ 1, 1, 1, 1 ],
    [ 1, 1, 1, 0,
      1 ],
    [ 1, 1, 1, 0,
      0, 0, 1 ],
    [ 1, 1, 0, 0,
      1, 1 ],
    [ 1, 1, 0, 0,
      0, 1, 1 ],
    [ 0, 1, 1, 0,
      1, 1 ],
    [ 0, 1, 0, 0,
      1, 1, 1 ]
];
var colors = [
   'red', 'orange', 'purple' ,'blue', 'yellow', 'green'
]
function preload(){
    splashscreen = loadImage("https://cdn.dribbble.com/users/2475489/screenshots/9239848/media/ff48675e4dd24c950af1dda5ac3c6019.gif");
    level1 = loadImage("assets/level1.jpg");
    //playbutton = loadImage("assets/PLAYBUTTON.png")
    //aboutbutton = loadImage("assets/ABOUTBUTTON.png")
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    const canvas = document.getElementById('gameCanvas');
    //const ctx = canvas.getContext('2d');
     const blockSize = 20;
     const cols = windowWidth / blockSize;
     const rows = windowHeight / blockSize;
    initializeBoard();

    playbutton = createImg("assets/PLAYBUTTON.png");
    playbutton.position(windowWidth/20, windowHeight/3);
    playbutton.size(120,120);
    playbutton.hide()

    aboutbutton = createImg("assets/ABOUTBUTTON.png");
    aboutbutton.position(windowWidth/20, windowHeight/1.5);
    aboutbutton.size(120,120);
    aboutbutton.hide()
}

function draw(){
    if(gameState == "wait"){
        background(splashscreen);
        playbutton.show();
        aboutbutton.show();
    }

    playbutton.mousePressed( () =>{
        gameState = "level1";
        playbutton.hide();
        aboutbutton.hide();
    })

    aboutbutton.mousePressed( () =>{
        gameState = "about";
        playbutton.hide();
        aboutbutton.hide();
    })

    if (gameState == "level1") {
            // Set background to the image
            document.body.style.backgroundImage = "url('level1.jpg')";
            drawBoard();
            //setTimeout(gameLoop, 1000 / 2);
        newShape();

    if(gameState == "about"){
        aboutGame();
    }
}
}

function aboutGame(){
    swal({
      title: "About Game" ,
      text: "this info will come later",
      textAlign: "center",
      imageUrl: "assets/backrooms.gif",
      imageSize: "200x200",
      confirmButtonText: "Go back to main screen",
      confirmButtonColor: "red"     
    }, 
    function(){
        gameState = "wait"
    }
    )
}
function newShape(){
    var id = Math.floor(Math.random()* shapes.length);
    var shape = shapes[id];
 
    var current = [];
 
    for(var y = 0 ; y < 4; ++y){
        current[y] = [];
        for(var x = 0 ; x < 4; ++x){
            var i = 4*y + x;
            if(typeof shape[i]  != 'undefined' && shape[i]){
             current[y][x] = id+1;
 
            }
            current[y][x] = 0;
        }
    }
 
 }
 function drawBoard() {

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (board[row][col] === 1) {
          ctx.fillStyle = 'blue';
          ctx.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
        } else {
          ctx.clearRect(col * blockSize, row * blockSize, blockSize, blockSize);
        }
        ctx.strokeStyle = 'black';
        ctx.strokeRect(col * blockSize, row * blockSize, blockSize, blockSize);
      }
    }
  }

 function initializeBoard(){
    
    for (var row = 0; row < rows; row++) {
        board[row] = [];
        for (var col = 0; col < cols; col++) {
          board[row][col] = 0;
        }
      } 

    }