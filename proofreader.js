
// check if the word has same letters as the tiles

function proofReadWord(selectedRow, word) {

    // first the word is capitalized for easier comparing between the tiles
    word = word.toUpperCase()

    yellowLetter(selectedRow, word)       // yellow light checker
    greenLetter(selectedRow, word)        // green light checker

    if (wordCheck(selectedRow, word)) return true   // final comparison between the word and row's tiles
}

function yellowLetter(selectedRow, word) {

    for(let tile = 0; tile < selectedRow.length; tile++) {
        let currentCharacter = selectedRow[tile].innerHTML 
        if (word.includes(currentCharacter)) selectedRow[tile].classList.add('yellow')
    }
}

function greenLetter(selectedRow, word) {

    for (let index = 0; index < selectedRow.length; index++) {
        let currentCharacter = selectedRow[index].innerHTML 
        if (currentCharacter == word[index]) selectedRow[index].classList.add('green')
    }
}

function wordcheck(selectedRow, word) {

    for (let index = 0; index < selectedRow.length; index++) {
        let currentCharacter = selectedRow[index].innerHTML
        if (currentCharacter != word[index]) return false
    }
    console.log('winning word!')
    return true

}