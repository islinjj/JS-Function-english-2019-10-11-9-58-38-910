function palindrome(message){
    var length = message.length;
    var s = '';
    for (let i = message.length-1; i >= 0; i--) {
        s+=message[i];
    }
    document.write(message == s)
    document.write('<br>')
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true