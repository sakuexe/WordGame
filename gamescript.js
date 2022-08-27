
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

function keyFunction(e){
    if (tile < 0) tile = 0

    let CurrentRow = findRow(row)

    CurrentRow.querySelectorAll(".gamecontent")[tile].innerHTML = e.path[0].innerHTML

    if (tile + 1 < gamesize){
        tile++
        addVisualIndicator(tile, CurrentRow)
    }
}

function specialKeyFunction(pressed){

    if (pressed.path[0].id === "enter") return enterFunction()

    deleteFunction(findRow(row).querySelectorAll(".gamecontent")[tile - 1])
    
}

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', pressed => {
        keyFunction(pressed)
    })
    keys[i].addEventListener('keypress', event => {
        if (event.key === 'Enter') keyFunction(event)
    })
}

for (let i = 0; i < specialKeys.length; i++) {
    specialKeys[i].addEventListener('click', pressed => {
        console.log(pressed)
        specialKeyFunction(pressed)
    })
    specialKeys[i].addEventListener('keypress', function(event) {
        console.log(event)
        if (event.key === 'Enter') specialKeyFunction(event)
    })
}

// functions


function deleteFunction(selectedTile) {
    if (tile != -1) {
        console.log(`Deleting tile: ${tile + 1}`, selectedTile)
        selectedTile.innerHTML = ""
        tile -= 1
        addVisualIndicator(tile, findRow(row))
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
    removeVisualIndicator(currentRow)

    if (row == gamesize || proofReadWord(currentRow.querySelectorAll(".gamecontent"), wordOfTheGame)) {

        console.log(document.querySelector(`#row-${row}`))

        console.log(document.querySelector('#result'))

        document.querySelector('#game-word').innerHTML = wordOfTheGame

        document.querySelector('#result').style.display = 'block'

        return
        
    }

    console.log(`changing to row: `)

    // checks for correct letters
    proofReadWord(currentRow.querySelectorAll('.gamecontent'), wordOfTheGame)

    //changes row
    tile = 0
    row++
    addVisualIndicator(tile, findRow(row))
    
}

