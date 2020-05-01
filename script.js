function validaCPF(cpf) {
    // verificando se o numero digitado tem 11 dígitos
    if(cpf.length != 11 ){
        return false;
    }else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11) ;

        //validação do primeiro dígito
        if(resultado != digitos.charAt(0)) {
            return false;
        }

        //resetando a variável soma
        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacao() {

    //voltando mensagens ao estado inicial
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    const cpf = document.getElementById("input_cpf").value;
    
    var resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        console.log("caiu no true")
        document.getElementById("success").style.display = "block";
    }
    else {
        console.log("caiu no false")
        document.getElementById("error").style.display = "block";
    }
}
