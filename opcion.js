let array = [];
let tarea = document.getElementById("tarea");
let agregar = document.getElementById("agregar");

agregar.addEventListener("click",function(){
    let texagregado = tarea.value;
    if(texagregado === ""){
        alert("Ingresa una tarea")
    }else{
        array.push(tarea.value);
        console.log(array);
        tarea.value = "";
    }
    tarea.focus();
});




