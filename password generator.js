let characters = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","m",
                    "n","0","P","Q","R","s","t","U","v","w","x","Y", "Z", "a", 
                    "b", "c", "d", "e","f", "g","h", "i","j","k","l","m","n","o",
                    "p","q", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3",
                     "4", "5", "6", "7", "8", "9","~","`","!","@", "$", "%","^","&",
                     "*","(",")","_","-", "+", "=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]

let pOne = document.getElementById("psOne")
let pTwo = document.getElementById("psTwo")
let button = document.getElementById("bt-el")

function psGen() {
    let password = ""
    for (let i=0; i<15; i++){
        let randomPs = Math.floor (Math.random()*characters.length)
        password += characters[randomPs] 
    }
    return password
}


function btn() {
    pOne.textContent = psGen()
    pTwo.textContent = psGen()
}
