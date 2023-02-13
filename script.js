let textoOriginal = document.getElementById("text-area")
let resposta = document.getElementById("resposta")

function criptografar (){
    let texto = textoOriginal.value.toLowerCase()
    let textoEncriptado = '';

    for(let i = 0; i < texto.length; i++){
        switch (texto[i]) {
            case"e":
                textoEncriptado += "enter"
                break;
            case "i":
                textoEncriptado += "imes"
                break;
            case "a":
                textoEncriptado += "ai"
                break;
            case "o":
                textoEncriptado += "ober"
                break;
            case "u":
                textoEncriptado += "uaft"
                break;
            default:
                textoEncriptado += texto[i]
                break;
        }
    }
    console.log(textoEncriptado);

    let resultado = document.getElementById("resposta")
    resultado.style.backgroundImage = "none";
    resultado.value = textoEncriptado
    resultado.style.fontSize = "2rem";
    resultado.style.color = "#495057"
   
}

function desencriptar() {
    let encriptado = textoOriginal.value.toLowerCase()
    let matriz = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];

    for(i = 0; i < matriz.length; i++){
        if(encriptado.includes(matriz[i][0])){
            encriptado = encriptado.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }


    let resultado = document.getElementById("resposta")
    resultado.style.backgroundImage = "none";
    resultado.value = encriptado
    resultado.style.fontSize = "2rem";
    resultado.style.color = "#495057"
}

const textoBloco2 = document.getElementById("resposta")

function copiar() {
    let textoCopiado = textoBloco2.value
    navigator.clipboard.writeText(textoCopiado).then()
}