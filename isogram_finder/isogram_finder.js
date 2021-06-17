const IsogramFinder = function (word) {
    this.word = word.split('')
}

IsogramFinder.prototype.isIsogram = function () {
    let isIsogram = true
    const checkedLetters = []
    this.word.forEach(letter => {
        if ((checkedLetters.includes(letter))){
            isIsogram = false
        }
        else{
            checkedLetters.push(letter)
        }
    })
    return isIsogram
}

module.exports = IsogramFinder;
