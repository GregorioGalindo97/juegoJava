let limite=10;
let intentos=0;
let numeroSecreto = generarNumeroSecreto(limite);


function asignarTitulo(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function intentoUsuario() {
    verificarIntento();
    return;
}

function reiniciarJuego(){
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled','true')
    return;
}

function condicionesIniciales(){
    intentos=0;
    asignarTitulo('h1',"Sobres adivina un numero");
    asignarTitulo('p',"Ingresa un número entre 1 y 10");
    limpiarCaja();
    numeroSecreto=generarNumeroSecreto(limite);
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('entrada').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTitulo('h1','Genial lo lograste eres un ganador!!');
        asignarTitulo('p', `¡Acertaste el número, en ${intentos} intentos!`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTitulo('p', 'El número secreto es menor');
        } else {
            asignarTitulo('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function generarNumeroSecreto() {
    let listaNumeros=[];
    let numeroGenerado=Math.round(Math.random()*limite);

    console.log(listaNumeros);
    console.log(numeroGenerado);

    if(listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
    
}


function limpiarCaja() {
    let valorCaja = document.querySelector('#entrada');
    valorCaja.value='';
}

asignarTitulo('p', `Ingresa un número entre 1 y ${limite} `);
asignarTitulo('h1', "Sobres adivina un numero");

console.log(numeroSecreto);

