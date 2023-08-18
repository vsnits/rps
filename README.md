(requests per second)

# Measure connection
```js
var r = 1;
setInterval(function() { 
    console.log(`${r} requests/second`); r = 0;
     },
990) // the real time is less than one second

setInterval(function() {
    var f = Math.floor(Math.random()*98)+1
    fetch(`https://vsnits.github.io/rps/files/${f}`).then(function() {r++})
    },
 0)
```
# Browser hangin'
## ! Bug !
The following code makes not the only tab hang, but the whole browser work incorrectly. <br>
Fetch at least continues after reopening until the memory runs out (if ever) <br>
Affects Firefox and Chrome, but not MS Edge
```js
var p = 0, f = 1, fch
while(p < 1e8) {
   p++ // the process is not infinite
   f = (Math.floor(Math.random()*98)+1) // variables are outside the stack
   fch = fetch(`https://vsnits.github.io/rps/files/${f}`) // all files are empty
   }
```
