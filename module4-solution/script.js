/*
Solution of assignment 4:

Expected output:

Hello Rashed
Good Bye John
Good Bye Joni
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Moon
*/

(function() {
    var names = ["Rashed", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Moon"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
