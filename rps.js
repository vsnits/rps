// Measure connection speed:
var r = 1;
setInterval(function() { 
    console.log(`${r} requests/second`); r = 0;
     }, 1000)
setInterval(function() {
    var f = Math.floor(Math.random()*98)+1
    fetch(`https://vsnits.github.io/rps/files/${f}`).then(function() {r++})
    }, 0)
/*
Browser kill:
var p = 0
while(p < 1e10) {
   p++
   var f = (Math.floor(Math.random()*98)+1)
   fetch(`https://vsnits.github.io/rps/files/${f}`)
   }
*/
