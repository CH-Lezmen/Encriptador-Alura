

function modificarView (){
    document.getElementById("view__img").style.display="none";
    document.getElementById("view__subtitle").style.display="none";
    document.getElementById("view__paragraph").style.display="none";
    document.getElementById("view__output").style.display="block";
    document.getElementById("view__btn").style.display="inherit";
}

function encriptar (){
    let texto = document.getElementById("input").value.toLowerCase();

    let estado = validacion(texto);

    if(estado==true){
        let textoCifrado = texto.replace(/e/igm,'enter');
        textoCifrado = textoCifrado.replace(/o/igm,'ober');
        textoCifrado = textoCifrado.replace(/i/igm,'imes');
        textoCifrado = textoCifrado.replace(/a/igm,'ai');
        textoCifrado = textoCifrado.replace(/u/igm,'ufat');

        modificarView();
        document.getElementById("view__output").value=textoCifrado;  
    }
    if(estado==false){
        alert("No es valido el mensaje escrito");
    }
}

function desencriptar (){
    let texto = document.getElementById("input").value.toLowerCase();

    let estado = validacion(texto);

    if(estado==true){
        let textoCifrado = texto.replace(/enter/igm,'e');
        textoCifrado = textoCifrado.replace(/ober/igm,'o');
        textoCifrado = textoCifrado.replace(/imes/igm,'i');
        textoCifrado = textoCifrado.replace(/ai/igm,'a');
        textoCifrado = textoCifrado.replace(/ufat/igm,'u');
    
        modificarView();
        document.getElementById("view__output").value=textoCifrado;   
    }
    if(estado==false){
        alert("No es valido el mensaje escrito");
    }
}

function copiar() {
    var copiarTexto = document.getElementById("view__output").value;
    navigator.clipboard.writeText(copiarTexto);
}

function limpiar() {
    document.getElementById("input").value = '';

}

function validacion(frase) {
    let regex = /[A-ZÀ-ú]/;
    return (!regex.test(frase) && frase != '');
}
