
// game function script

// retrieve the keyboard and the game board
var keys = document.querySelectorAll(".key")
var board = document.querySelectorAll(".gamerow")
var specialKeys = document.querySelectorAll(".specialkey")
var gamesize = 5

// adding a counter to calculate the tile
var tile = 0
var row = 1

// randomize a word
var wordIndex = Math.floor(Math.random() * 211)
wordOfTheGame = fiveLetterNouns[wordIndex]
console.log(wordOfTheGame)

function findRow(row) {
    return document.querySelector(`#row-${row}`)
}

function keyFuntion(e){
    if (tile < 0) tile = 0

    let CurrentRow = findRow(row)

    CurrentRow.querySelectorAll(".gamecontent")[tile].innerHTML = $(e.target)[0].innerHTML

    if (tile + 1 < gamesize){
        tile++
        addVisualIndicator(tile, row)
    }
}

function specialKeyFunction(e){

    if ($(e.target)[0].id === "enter") return enterFunction()

    deleteFunction(findRow(row).find(".gamecontent")[tile])
    
}

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', pressed => {
        keyFuntion(pressed)
    })
}

for (let i = 0; i < specialKeys.length; i++) {
    specialKeys[i].addEventListener('click', pressed => {
        specialKeyFunction(pressed)
    })
}

// functions



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
        if (!findRow(row).querySelectorAll(".gamecontent")[e].innerHTML)
        {
            console.log(`Tile, ${e + 1} does NOT contain a letter`)
            return false
        }
    }

    console.log("Row is full")
    return true
}

function enterFunction() {

    if (checkFilledTiles() == false) return alert('Please fill in the whole row before pressing enter')

    let currentRow = findRow(row)

    if (row == gamesize || proofReadWord(currentRow.querySelectorAll(".gamecontent"), wordOfTheGame)) {

        console.log(document.querySelector(`#row-${row}`))
        if(proofReadWord(!currentRow.querySelectorAll(".gamecontent"), wordOfTheGame)) alert(`Game over, the word was ${wordOfTheGame}`)

        console.log(document.querySelector('#result'))

        document.querySelector('#game-word').innerHTML = wordOfTheGame

        document.querySelector('#result').style.display = 'block'

        return
        
    }

    console.log(`changing to row: `)
    removeVisualIndicator($(`#row-${row}`).find('.gamecontent'))

    // checks for correct letters
    proofReadWord(currentRow.querySelectorAll('.gamecontent'), wordOfTheGame)

    //changes row
    tile = 0
    row++
    addVisualIndicator(tile, row)
    
}

