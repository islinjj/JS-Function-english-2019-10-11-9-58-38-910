function countWords(message){
    var a = message.split(' ');
    document.write(a.length)
}
countWords('Good morning, I love JavaScript.'); // should return 5