const btnStakear = document.getElementById("preventar")

btnStakear.addEventListener('click', () => {

    const valuePreventa = document.getElementById("cantidadAPreventar").value

    if (valuePreventa === null || valuePreventa === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Un Valor A Comprar',
        })


    } else {

        ComprarPreventa();

    }

})