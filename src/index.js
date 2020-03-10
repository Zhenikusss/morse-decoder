const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let encodedGroups = expr.match(/(.{1,10})/gim);
    let morseGroups = [];

    for (let i = 0; i < encodedGroups.length; i++) {
        if (encodedGroups[i] === '**********') {
            morseGroups[i] = [' '];
        } else {
            morseGroups[i] = [];
            let encodedRow = encodedGroups[i].match(/(.{1,2})/gim);
            for (let j = 0; j < encodedRow.length; j++) {
                if (encodedRow[j] === '00') { 
                    continue;
                } 
                if (encodedRow[j] === '10') {
                    morseGroups[i].push('.');
                } 
                if (encodedRow[j] === '11') {
                    morseGroups[i].push('-')
                }
            }
        }
    }

    let result = '';
    let morseArr = morseGroups.map(group => group.join(''));

    for (let i = 0; i < morseArr.length; i++) {
        if (morseArr[i] == ' ') {
            result += ' ';
        } else {
            result += MORSE_TABLE[morseArr[i]];
        }
    }
    return result;
}

module.exports = {
    decode
}