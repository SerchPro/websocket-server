const socketController = (socket) => {

    console.log('client connect', socket.id);

    socket.on('disconnect', () => {
        console.log('disconnect', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload)
            //console.log(payload);
    });


}


module.exports = {
    socketController
}