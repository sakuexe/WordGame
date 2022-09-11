
// check if the word has same letters as the tiles
function proofReadWord(selectedRow, word) {

    // first the word is capitalized for easier comparing between the tiles
    word = word.toUpperCase()

    yellowLetter(selectedRow, word)       // yellow light checker
    greenLetter(selectedRow, word)        // green light checker

    if (wordCheck(selectedRow, word)) return true   // final comparison between the word and row's tiles
}

function yellowLetter(selectedRow, word) {

    // check every tile of given row and give a yellow border
    // if the tile's character is within the current game's word
    for(let tile = 0; tile < selectedRow.length; tile++) {
        let currentCharacter = selectedRow[tile].innerHTML 
        if (word.includes(currentCharacter)) selectedRow[tile].classList.add('yellow')
    }
}

function greenLetter(selectedRow, word) {

    // check every tile of given row and give a GREEN border
    // if the tile's character is in the same place as in the current game's word
    for (let index = 0; index < selectedRow.length; index++) {
        let currentCharacter = selectedRow[index].innerHTML 
        if (currentCharacter == word[index]) selectedRow[index].classList.add('green')
    }
}

function greyOutLetter(selectedRow, keys) {
    let greyLetters = []
    for (let index = 0; index < selectedRow.length; index++) {
        if (!(selectedRow[index].classList.contains('green') || selectedRow[index].classList.contains('yellow'))) greyLetters.push(selectedRow[index].innerHTML)
    }
    for (let index = 0; index < keys.length; index++) {
        if (greyLetters.includes(keys[index].querySelector('.keycontent').innerHTML)) keys[index].classList.add('grey')
    }
}

function wordCheck(selectedRow, word) {

    // checks if the given row's word is identical to the game's word
    for (let index = 0; index < selectedRow.length; index++) {
        let currentCharacter = selectedRow[index].innerHTML
        // if the character that is being inspected doesn't match the one in
        // the current game's word, a value of 'false' is returned
        if (currentCharacter != word[index]) return false
    }
    // if the inspection gets passed without any returns in between
    // a value of 'true' is returned
    return true
}