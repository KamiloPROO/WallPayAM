const btnHcompra = document.getElementById("btnHacerCompra")

btnHcompra.addEventListener('click', () => {

    const melo = document.getElementById("inputValorAComprar").value;
    const melo2 = document.getElementById("selecCuenta").value;
    const tasCam = localStorage.getItem("TasaCambioK");


    const compraXD = melo / tasCam;
    const caMin = localStorage.getItem("CantiMin");
    const caMax = localStorage.getItem("CantiMax");

    if (melo2 == "Seleccione Una Cuenta") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seleccione una cuenta de donde hara la compra',

        })


    } else if (melo === null || melo === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Cantidad A Comprar',

        })


    } else if (melo < caMin) {

        

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `La Cantidad Insertada Es Menor A La Cantidad Admitida (cantidad minima ${caMin} )`,

        })


    } else if (melo > caMax) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `La Cantidad Insertada Es Mayor A La Cantidad Admitida (cantidad maxima ${caMax })`,

        })


    } else {

        
        HacemosCompra();

    }

})