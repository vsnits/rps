
var p = 0
while(p < 1e4) {
   p++
   var f = (Math.floor(Math.random()*98)+1)
   fetch(`https://vsnits.github.io/rps/files/${f}`)
   }
