var inicio = 0 ;
var menosUno = 1;

var cantMini = localStorage.getItem("CantiMin");

function btnMenos() {

    var cantidadComprar = document.getElementById("inputValorAComprar").value;

    if ( cantidadComprar == "" ){

        const cantidadComprar = document.getElementById("inputValorAComprar").value = cantMini;

    } else if ( cantidadComprar != ""){
        
        
    
    }

}

function btnMas() {
 
  


    var cantidadComprar = document.getElementById("inputValorAComprar").value = ++ inicio;

    // if ( cantidadComprar == "" ){

    //     alert("melo")

    // }

}