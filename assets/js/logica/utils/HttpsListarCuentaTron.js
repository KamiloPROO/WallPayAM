document.addEventListener('DOMContentLoaded', e => {

    var idcff = localStorage.getItem("idCfLogin");
    var tokeen = localStorage.getItem("tokenLogin");

    var loading = document.getElementById('cargando');
    
        

    $.ajax({
        type: "GET",
        url: "https://appwollpay.app/Api/GetCuentasTron",
        data: { "IdCf": idcff , "Token": tokeen , "Skip": 1 , "Take":1 },
        success: function (data) {

           
            var formData = JSON.parse(data);
            loading.style.display = 'none'

            if (formData != "" ) {

                var formData1 = JSON.parse(formData[0].Json);

                console.log(formData1);

                const refe = document.getElementById('respuestaReferencia');
                const saldoUsdt = document.getElementById('respuestaSaldoUSDT')
                const saldoTrx = document.getElementById('respuestaSaldoTRX')
                const saldoWplay = document.getElementById('respuestaSaldoWplay')
                const nombreUser = document.getElementById('respuestaNombreUser')
                const respu5 = document.getElementById('respuestaActualizada')

                const refeComp = formData1.Referencia;
                const idCF = formData1.IdCf;

                localStorage.setItem("referenciaComprar",refeComp);
                localStorage.setItem("idcfComprar",idCF);

                console.log(refeComp);
                console.log(idCF);

                refe.textContent = `${formData1.Referencia}`
                saldoUsdt.textContent = `${formData1.SALDO_USDT}`
                saldoTrx.textContent = `${formData1.Saldo}`
                saldoWplay.textContent = `${formData1.SALDO_WPAY}`
                nombreUser.textContent = `${formData1.NombreUsuario}`
                respu5.textContent = `${formData1.FechaActualizacionParse}`

                document.getElementById('containerCardTron').classList.toggle("camiloOcultar")

            } else {
                document.getElementById('crearCuentaTron2').classList.toggle("camiloOcultar")
                document.getElementById('crearCuentaTron2').classList.toggle("camilo")

            }
        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });

})
