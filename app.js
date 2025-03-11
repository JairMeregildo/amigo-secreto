let nombres = [];

function agregarAmigo(){
    let amigos = document.querySelector('#amigo').value;
    document.querySelector('#resultado').innerHTML='';
    if (amigos === '') {  // Validación para que no se agregue un valor vacío
        alert('Por favor, ingrese un nombre valido')
    }else if (nombres.includes(amigos)) {  
        alert('Este nombre ya ha sido agregado');
    } else {
        nombres.push(amigos); // Si no esta vacio agrega la lista de amigos
        mostrar(); // Actualiza la lista de amigos
    }
    document.querySelector('#amigo').value=''; // Limpiar el campo de entrada después de agregar
}

function mostrar(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML=''; // Limpiar la lista despues de agregar nuevos amigos
    for(let elementoActual of nombres){
        lista.innerHTML += '<li>' + elementoActual + '</li>';
    }
}

function sortearAmigo(){
    
    if(nombres.length === 0){
        document.querySelector('#resultado').innerHTML='<p>No hay amigos para sortear </p>';
    }else if (nombres.length < 2) {
        document.querySelector('#resultado').innerHTML = '<p>Debe haber al menos 2 participantes para el sorteo.</p>';
        return;
    } else {
        let sorteo = Math.floor(Math.random()*nombres.length);
        document.querySelector('#resultado').innerHTML='<p>El amigo secreto sorteado es: '+ nombres[sorteo]+'</p>';
    }
    
    nombres = [];
    mostrar();
}