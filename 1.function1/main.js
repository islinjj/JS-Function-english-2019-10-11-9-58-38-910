function reverseString(message){
    var reverseS = message.split('').reverse().join('')
    document.write(reverseS)
}

reverseString('hello'); // should return 'olleh'