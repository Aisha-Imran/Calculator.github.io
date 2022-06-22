function getNumber(num){
    var result=document.getElementById("result")
    console.log(result)
    result.value+= num
}

function clearResult() {
    var result=document.getElementById("result")
    console.log(result)
    result.value=""

    
}

function calculation(){
    var result=document.getElementById("result")
    console.log(result)
    result.value=eval(result.value)
}