function insert(num){
    var number = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = number + num
}


function cls(){
    document.getElementById("result").innerHTML = " "
    if(document.getElementById("result")){
        number
    }else{
        cls()
    }
}

function calcular(){
    var result = document.getElementById("result").innerHTML
    if(result){
        document.getElementById("result").innerHTML = eval(result)
    }
    else{
        document.getElementById("result").innerHTML = "Nada..."
    }

}