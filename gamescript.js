
// game function script

// retrieve the keyboard and the game board
var keys = $(".key")
var board = $(".gamerow")
var specialKeys = $(".specialkey")
var gamesize = 5

// adding a counter to calculate the tile
var tile = 0;
var row = 1;

// randomize a word
var wordIndex = Math.floor(Math.random() * 211)
wordOfTheGame = fiveLetterNouns[wordIndex]
console.log(wordOfTheGame)

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

    if (row == gamesize || proofreadRow($(`#row-${row}`).find(".gamecontent"), wordOfTheGame)) {

        if(proofreadRow(!$(`#row-${row}`).find(".gamecontent"), wordOfTheGame)) return alert(`Game over, the word was ${wordOfTheGame}`)

        console.log($("#result"))

        $("#game-word")[0].innerHTML = wordOfTheGame

        $("#result").css({ "display": "block" })
        
    }

    console.log(`changing to row: `)
    removeVisualIndicator($(`#row-${row}`).find(".gamecontent"))

    // checks for correct letters
    proofreadRow($(`#row-${row}`).find(".gamecontent"), wordOfTheGame)

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

