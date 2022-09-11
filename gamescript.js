
// game function script

// retrieve the keyboard and the game board
var keys = document.querySelectorAll('.key')
var board = document.querySelectorAll('.gamerow')
var specialKeys = document.querySelectorAll('.specialkey')
var gamesize = 5

// the two variables in charge of keeping track of the current tile and row
var tile = 0
var row = 1

// pull a random word from the words.js file's fiveLetterNouns object via the randomly assigned number as an index
var wordIndex = Math.floor(Math.random() * 211)
wordOfTheGame = fiveLetterNouns[wordIndex]
console.log(wordOfTheGame)

function findRow(row) {
    // finds the current active row in the game. Then takes it contents and forms an array of them
    // this is done by using the current row variable's value (minus one) as an index
    let activeRow = document.querySelectorAll('.gamerow')[row - 1]
    return activeRow.querySelectorAll('.gamecontent')
}

function checkFilledTiles(currentRow) {
    // checks if the current row has all of it's tile's contents filled
    // if not, it returns the value 'false'
    for (let index = 0; index < gamesize; index++){
        if (!currentRow[index].innerHTML) return false
    }
    // if all tiles have inner values, returns value 'true'
    return true
}

function keyFunction(key){
    // firstly checks that tile isn't a negative number
    // afterwards finds the current row and acitve tile
    // this tile's content gets assigned the given key's value
    if (tile < 0) tile = 0

    let CurrentRow = findRow(row)

    if (key.type === 'click') CurrentRow[tile].innerHTML = key.path[0].innerHTML // checks weather the given key is an html element
    else CurrentRow[tile].innerHTML = key.toUpperCase() // or a single character string, and assigns it accordingly

    if (tile + 1 < gamesize){ // lastly the current tile gets updated and a new visual indicator gets assigned
        tile++
        addVisualIndicator(tile, CurrentRow) // function can be found in visualscript.js (or by clicking gd, if using vim)
    }
}

function specialKeyFunction(pressed){
    // this function is called when either one of the 'special keys' are pressed (Enter or Delete)
    // it checks if the pressed button is the enter button and calls a function if it is true
    if (pressed.path[0].id === 'enter' || pressed.path[1].id === 'enter') return enterFunction()
    // if special key that gets pressed isn't the enter key, it can only be delete, so function for it gets called
    deleteFunction(findRow(row)[tile]) 
}

function deleteFunction(selectedTile) {
    if (tile != -1) {
        selectedTile.innerHTML = ''
        tile -= 1
        addVisualIndicator(tile, findRow(row))
    }
}


function enterFunction() {

    // if the check for filled tiles gives a false, exit function and throw an alert at the player
    if (!checkFilledTiles(findRow(row))) return enterWarning(findRow(row), tile)

    let currentRow = findRow(row)
    removeVisualIndicator(currentRow)

    if (row == gamesize && !proofReadWord(currentRow, wordOfTheGame)) return showResult(wordOfTheGame, false) 
    if (proofReadWord(currentRow, wordOfTheGame)) return showResult(wordOfTheGame, true)
    
    greyOutLetter(currentRow, keys)
    // updates current row and resets the tile counter
    tile = 0
    row++
    // lastly a new visual indicator gets added to the start of the new line
    addVisualIndicator(tile, findRow(row))
}

// loops through all of the keys and gives them an event listener
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', pressed => {
        // this event listener is for clicking the keys with the mouse
        // if the keys are clicked the function above is called and given the html element that was clicked
        keyFunction(pressed)
    })
}

for (let i = 0; i < specialKeys.length; i++) {
    specialKeys[i].addEventListener('click', pressed => {
        // same as above, but with the special keys this time
        specialKeyFunction(pressed)
    })
}

// if a key (that is a letter) on the keyboard is pressed, it gets added into the tile
document.addEventListener('keydown', pressed => {
    let letterArray =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    // first we check if the pressed key is a letter in the english alphabet (lower or uppercase)
    // using the above array of characters
    if (letterArray.includes(pressed.key.toLowerCase())) return keyFunction(pressed.key)
    // secondly we check if the pressed key is either Enter (Windows) or Return (Mac)
    if (pressed.key === 'Enter' || pressed.key == 'Return') return enterFunction()
    // and lastly we check if the pressed key was Backspace (Windows) or Delete (Mac)
    if (pressed.key === 'Backspace' || pressed.key === 'Delete') return deleteFunction(findRow(row)[tile])
})
