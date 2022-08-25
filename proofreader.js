
// check if the word has same letters as the tiles

function proofReadWord(selectedRow, word) {

    word = word.toUpperCase()

    correspondingLetter(selectedRow, word)   // yellow light
    matchingLetter(selectedRow, word)        // green light

    if (wordCheck(selectedRow, word)) return true
}

function correspondingLetter(selectedRow, word) {

    for(let tile = 0; tile < selectedRow.length; tile++) {
        if (word.includes(selectedRow[tile].innerHTML)) selectedRow[tile].classList.add('yellow')

        console.log(`letter ${selectedRow[tile].innerHTML} on tile ${tile}, is in the real word`)
    }

}

function matchingLetter(selectedRow, word) {

    score = 0

    $.each(selectedRow, function(index) {

        if (word[index] == selectedRow[index].innerHTML) {
            console.log(`letter ${selectedRow[index].innerHTML} on tile ${index + 1}, matching the real word`)
            selectedRow[index].classList.add("green")
            score++
        }

    });

    if (score == word.length) return true
}

function wordCheck(selectedRow, word) {

    for (let letter = 0; letter < selectedRow.length; letter++) {
        console.log(selectedRow[letter].innerHTML, word[letter])
        if (selectedRow[letter].innerHTML != word[letter]) return console.log("word is not the same as winning word")
    }
    console.log('winning word!')
    return true

}