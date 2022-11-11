let inputs = Array.from(document.getElementsByTagName("input"))
let number = document.getElementById("number")
let counter = 0

inputs.map(function(input) {
    input.addEventListener("click", countBunny)    
})

function countBunny() {
    counter++
    number.textContent = counter
}
