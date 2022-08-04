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
    let newString = '';
    let arr = [];

    for (let i = 0; i < expr.length; i++) {
        newString += expr[i];
        if(newString.length == 10) {
            arr.push(newString);
            newString = '';
        }
    //console.log(newString);
    }

    let newArr =[];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/10/gi, '.');
        arr[i] = arr[i].replace(/11/gi, '-');
        arr[i] = arr[i].replace(/\*/gi, ' ');
    newArr.push(arr[i]);
    }

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].replace(/^0+/, '');
    }

    let result = '';

    for (let a of newArr) {
        result += MORSE_TABLE[a] ||' ';
    }
return result;
}

module.exports = {
    decode
};