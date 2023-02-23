function comprar(val) {

    // alert("siuuuu")
    // window.location.href = "comprar2ronda.html"
    console.log(val);

    const idHpta = val;
    localStorage.setItem("IdCompraFinal", idHpta);

    if (idHpta != ""){
        window.location.href = "comprar2ronda.html"
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'server under maintenance',
        })
    }

}



document.addEventListener('DOMContentLoaded', e => {

    var idcfCuenta = localStorage.getItem("idcfComprar");
    var idCfUser = localStorage.getItem("idCfLogin");
    var idToken = localStorage.getItem("tokenLogin");
    var loading = document.getElementById('cargando');

    
    $.ajax({
        type: "POST",
        url: "https://appwollpay.app/Api/GetInforme",
        data: { "IdCf": idCfUser, "Token": idToken, "Skip": 1, "Take": 3000 },
        success: function (data) {

            loading.style.display = 'none'

           

            

            var formData = JSON.parse(data);

            // console.log(formData);
    
            for (const compras of formData) {

                console.log(compras);
               
                const txtTotalCuenta = document.getElementById("totalCuenta");
                const txtTotalTrx = document.getElementById("totalTrx");
                const txtTotalUsdt = document.getElementById("totalUsdt");
                const txtTotalWpay = document.getElementById("totalWpay");

                const restTotalCuenta = compras.totalCuenta;
                const restTotalTrx = compras.totalTrx;
                const restTotalUsdt = compras.totalUsdt;
                const restTotalWpay = compras.totalWPay;

                const compri = restTotalTrx.toFixed(2);
                const compri2 = restTotalWpay.toFixed(2);
                const compri3 = restTotalUsdt.toFixed(2);
                const compri4 = restTotalCuenta.toFixed(2);

                txtTotalCuenta.textContent = compri4;
                txtTotalTrx.textContent = compri;
                txtTotalUsdt.textContent = compri3;
                txtTotalWpay.textContent = compri2;



            }

        },
        error: function () {
            loading.style.display = 'none'
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'server under maintenance',
            })
        }
    });

})
