// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


console.log("Hola mundo");




const socket = io();

socket.on('connect', () => {
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';

    console.log("Connect");
});

socket.on('disconnect', () => {

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
    console.log("Disconnect");
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje: mensaje,
        id: "123456",
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log(id);
    });
});

socket.on('enviar-mensaje', (payload) => {

    console.log("anwers", payload);
});