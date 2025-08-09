const palindromes = function (string) {
    let liste = "abcdefghıjklmnoprstuvyzqwx1234567890"

    let cleaned = string.toLowerCase().split('')
    .filter((character)=> liste.includes(character))
    .join('');

    let reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
