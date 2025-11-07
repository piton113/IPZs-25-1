let numArr = []
for(let i = 0 ; i < 10; i++) {
     numArr[i] = Math.round(Math.random() * 100 - 50)
}
let piton = [] 
let pitonchik = [] 

for(let i = 0; i < numArr.length; i++) {
 if (numArr[i] > 0 ) {
        piton.push(numArr[i])
    } else if (numArr[i] < 0) {
        pitonchik.push(numArr[i])
    }
    
}
let allNumbersInOrder = [piton, pitonchik]


console.log(piton, pitonchik)
