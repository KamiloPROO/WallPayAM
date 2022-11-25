const btnStakear = document.getElementById("stakear")

btnStakear.addEventListener('click', () => {

    const valueStake = document.getElementById("cantidadAStakear").value

    if (valueStake === null || valueStake === "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa Un Valor A Stakear',
        })


    } else {

        VamosAStakear();

    }

})