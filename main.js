function insert(num){
    var number = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = number + num
}

function cls(){
    document.getElementById("resultado").innerHTML = " "
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
    else{
        document.getElementById("resultado").innerHTML = "Nada..."
    }

}
