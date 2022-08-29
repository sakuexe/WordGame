
// game function script

// retrieves the keys, board and sets the game size
var keys = document.querySelectorAll(".key")
var board = document.querySelectorAll(".gamerow")
var specialKeys = document.querySelectorAll(".specialkey")
var gamesize = 5

// the two variables in charge of keeping track of the current tile and row
var tile = 0
var row = 1

// pull a random word from the words.js file's fiveLetterNouns object via the randomly assigned number as an index
var wordIndex = Math.floor(Math.random() * 211)
wordOfTheGame = fiveLetterNouns[wordIndex]
console.log(wordOfTheGame) // TODO: remove this after completion

function findRow(row) {
    // finds the current active row in the game. Then takes it contents and forms an array of them
    // this is done by using the current row variable's value (minus one) as an index
    let activeRow = document.querySelectorAll('.gamerow')[row - 1]
    return activeRow.querySelectorAll('.gamecontent')
}

function keyFunction(key){
    if (tile < 0) tile = 0

    let CurrentRow = findRow(row)

    CurrentRow[tile].innerHTML = key.path[0].innerHTML

    if (tile + 1 < gamesize){
        tile++
        addVisualIndicator(tile, CurrentRow)
    }
}

function specialKeyFunction(pressed){

    if (pressed.path[0].id === 'enter' || pressed.path[1].id === 'enter') return enterFunction()

    deleteFunction(findRow(row)[tile - 1])
    
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

    for (let index = 0; index < gamesize; index++){
        if (!findRow(row)[index].innerHTML) return false
    }
    return true
}

function enterFunction() {

    // if the check for filled tiles gives a false, exit function and throw an alert at the player
    if (!checkFilledTiles()) return alert('Please fill in the ENTIRE row before pressing enter')

    let currentRow = findRow(row)
    removeVisualIndicator(currentRow)

    if (row == gamesize && !proofReadWord(currentRow, wordOfTheGame)) return showResult(wordOfTheGame, false)
        
    if (proofReadWord(currentRow, wordOfTheGame)) return showResult(wordOfTheGame, true)

    console.log(`changing to row: `)

    //changes row
    tile = 0
    row++
    addVisualIndicator(tile, findRow(row))
    
}
