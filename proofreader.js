
// check if the word has same letters as the tiles

function proofReadWord(selectedRow, word) {

    word = word.toUpperCase()

    yellowLetter(selectedRow, word)   // yellow light
    greenLetter(selectedRow, word)        // green light

    if (wordCheck(selectedRow, word)) return true
}

function yellowLetter(selectedRow, word) {

    for(let tile = 0; tile < selectedRow.length; tile++) {
        if (word.includes(selectedRow[tile].innerHTML)) selectedRow[tile].classList.add('yellow')

        console.log(`letter ${selectedRow[tile].innerHTML} on tile ${tile}, is in the real word`)
    }

}

function greenLetter(selectedRow, word) {

    for (let index = 0; index < selectedRow.length; index++) {
        if (selectedRow[index].innerHTML == word[index]) selectedRow[index].classList.add('green')
    }

}

function wordCheck(selectedRow, word) {

    for (let letter = 0; letter < selectedRow.length; letter++) {
        if (selectedRow[letter].innerHTML != word[letter]) return console.log("word is not the same as winning word")
    }
    console.log('winning word!')
    return true

}