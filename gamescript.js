
// game function script

// retrieve the keyboard and the game board
var keys = $(".key");
var board = $(".gamerow");
var moveKeys = $(".movekey")

// adding a counter to calculate the tile
var tile = 0;

keys.click(function(e){
    board.find(".gamecontent")[tile].innerHTML = $(e.target)[0].innerHTML;
    if (tile < 4){
        tile++;
    }
});

moveKeys.click(function(e){
    if ($(e.target)[0].id === "left" || $(e.target)[0].id === "lefticon"){
        if (tile == 0){
            console.log("loppuun")
            tile = 4;
        }
        else if (tile - 1 !== 0) {
            console.log("vasemmalle")
            tile -= 1;
        }
        else {
            console.log("alkuun")
            tile = 0;
        }
    }
    else if ($(e.target)[0].id === "right" || $(e.target)[0].id === "righticon"){
        if (tile == 4){
            console.log("alkuun")
            tile = 0;
        }
        else if (tile + 1 !== 5) {
            console.log("oikealle")
            tile++;
        }
        else {
            console.log("viimeiseen")
            tile = 4;
        }
    }
})

// random index
var wordIndex = Math.floor(Math.random() * 211);
console.log(fiveLetterNouns[wordIndex]);