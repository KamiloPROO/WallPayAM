const btnHcompra = document.getElementById("btnHacerCompra")

btnHcompra.addEventListener('click', ()=> {

    const melo = document.getElementById("selectCategorias").value;
    const caMin = localStorage.getItem("CantiMin");
    const caMax = localStorage.getItem("CantiMax");

     if ( melo === null || melo === ""){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Cantidad A Comprar',
            
        })


     }else if (melo > caMin){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La Cantidad Insertada Es Menor A La Cantidad Admitida',
            
        })


     }else if (melo < caMax){

      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La Cantidad Insertada Es Mayor A La Cantidad Admitida',
          
      })


   }else{

        HacemosCompra();

     }

})