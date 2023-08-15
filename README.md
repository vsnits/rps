(requests per second)

# Measure connection
```js
var r = 1;
setInterval(function() { 
    console.log(`${r} requests/second`); r = 0;
     },
990) // real time is less than on second

setInterval(function() {
    var f = Math.floor(Math.random()*98)+1
    fetch(`https://vsnits.github.io/rps/files/${f}`).then(function() {r++})
    },
 0)
```
# Browser hangin'
## ! Bug !
The following code makes not the only tab hanging, but makes the whole browser work incorrectly <br>
Fetch continues after reopening until the memory runs out (if ever) <br>
```js
var p = 0
var f = 1
var fch = null
while(p < 1e10) {
   p++
   f = (Math.floor(Math.random()*98)+1)
   fch = fetch(`https://vsnits.github.io/rps/files/${f}`)
   }
```
