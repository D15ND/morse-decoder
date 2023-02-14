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
    let result='';
    for (let i=0; i<expr.length; i=i+10) {
        if (expr[i]==='*') {
            result=result+' ';
            continue;
        }
        let str=expr.slice(i, i+10);
        let beforeResult=''
        for (let j=0; j<str.length; j=j+2) {
            if (str[j]==='1' && str[j+1]==='0') {
                beforeResult=beforeResult+'.';
            } else if (str[j]==='1' && str[j+1]==='1') {
                beforeResult=beforeResult+'-';
            }
        }
        result=result+MORSE_TABLE[beforeResult];
    }
    return result;
}

module.exports = {
    decode
}