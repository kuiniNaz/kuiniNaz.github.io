console.clear()
function factorial (num) {
    let temp=num
    for(let u = num - 1; u > 0; u--){
        temp *= u
    }
    return temp
}

let cb = document.getElementById("calculateFactorial")
cb.addEventListener("click", function(){
    let fn = document.getElementById("factorialNum")
    document.getElementById("result").innerHTML = fn.value + "! = " + factorial(fn.value)
})