
// game function script

// retrieve the keyboard and the game board
var keys = $(".key")
var board = $(".gamerow")
var specialKeys = $(".specialkey")
var gamesize = 5

// adding a counter to calculate the tile
var tile = 0;
var row = 1;

keys.click(function(e){
    if (tile < 0) tile = 0

    CurrentRow = findRow(row)

    CurrentRow.find(".gamecontent")[tile].innerHTML = $(e.target)[0].innerHTML;

    if (tile + 1 < gamesize){
        tile++
        addVisualIndicator(tile, row)
    }
});

specialKeys.click(function(e){
    if ($(e.target)[0].id === "enter") return enterFunction()

    deleteFunction(findRow(row).find(".gamecontent")[tile])
    
});



// functions

function enterFunction() {

    if (checkFilledTiles() == false) return alert("Please fill in the whole row before pressing enter")
    if (row == gamesize) return /* TODO: when last row is filled */

    console.log(`changing to row: `)
    console.log($(`#row-${row}`))
    removeVisualIndicator($(`#row-${row}`).find(".gamecontent"))
    //changes row
    tile = 0
    row++
    addVisualIndicator(tile, row)
}

function deleteFunction(selectedTile) {
    if (tile != -1) {
        console.log(`Deleting tile: ${tile + 1}`)
        selectedTile.innerHTML = ""
        tile -= 1
        addVisualIndicator(tile, row)
    }
}

function checkFilledTiles() {

    for (e = 0; e < gamesize; e++){
        if (!findRow(row).find(".gamecontent")[e].innerHTML)
        {
            console.log(`Tile, ${e + 1} does NOT contain a letter`)
            return false
        }
    }

    console.log("Row is full")
    return true
};

function findRow(row) {
    return $(`#row-${row}`)
}

// random index
var wordIndex = Math.floor(Math.random() * 211)
console.log(fiveLetterNouns[wordIndex])