const btnPubliVenta = document.getElementById("btnHacerVenta")

btnPubliVenta.addEventListener('click', () => {

    const seleCuenta = document.getElementById("selecCuenta").value;
    const inTitu = document.getElementById("inputTitulo").value;
    const inDesc = document.getElementById("inputTitulo").value;
    const seleCuentaTron = document.getElementById("selecCuentaTron").value;
    const inCanMin = document.getElementById("inputTitulo").value;
    const inCanMax= document.getElementById("inputTitulo").value;
    const inTasaCambio= document.getElementById("inputTasaCambio").value;
    const seleFecha = document.getElementById("selecTiempoHoras").value;
    const seleMetPago = document.getElementById("selectMetoPagos").value;
    const inNumCuenta = document.getElementById("inputNumCuenta").value;

    if (seleCuenta === "Seleccione Moneda") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecciona Una Moneda',
        })


    } else if(inTitu === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Agregue un titulo de compra',
        })


    } else if(inDesc === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Agregue una Descripcción de compra',
        })


    }else if(seleCuentaTron === "Seleccionar Cuenta") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seleccione cuenta tron de los fondos',
        })


    }else if(seleCuentaTron === "Seleccionar Cuenta") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seleccione cuenta tron de los fondos',
        })


    }else if(inCanMin === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese cantidad minima de la compra',
        })


    }else if(inCanMax === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese cantidad maxima de la compra',
        })


    }else if(inTasaCambio === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese cantidad maxima de la compra',
        })


    }else if(seleFecha === "Seleccionar") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seleccione cuenta tron de los fondos',
        })


    }else if(seleMetPago === "Seleccione Un Metodo...") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seleccione un metodo de pago',
        })


    }else if(seleMetPago === "Banco Bogota") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Metodo de pago no disponible',
        })


    }else if(inNumCuenta === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Numero De Tu Cuenta de Banco',
        })


    }else {

        PublicarVentaGod();

    }

})