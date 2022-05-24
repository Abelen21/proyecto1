const inputTexto = document.querySelector('#texto');
const inputClave = document.querySelector("#clave");
const resultado = document.querySelector("#resultado");

function btncifrar(){
    const textoCifrado = cifrar(String(inputTexto.value), parseInt(inputClave.value));
    resultado.value = textoCifrado;
}


function cifrar(textoParaCifrar,claveParaCifrar) {
    textoParaCifrar = textoParaCifrar.toUpperCase();
    for ( let i = 0; i < textoParaCifrar.length; i++){
        console.log('caracter ' + textoParaCifrar.charCodeAt(i));
        textoCifrado = (textoParaCifrar.charCodeAt(i)-65 + claveParaCifrar)%26 +65;
        textoCifrado = String.fromCharCode(textoCifrado);
        console.log(textoCifrado);
        textoParaCifrar = textoParaCifrar.split("")
        textoParaCifrar[i] = textoCifrado;
        textoParaCifrar = textoParaCifrar.join("")
        console.log(textoParaCifrar);
    }
    return textoParaCifrar;
}



  


