const socketController = (socket) => {
    console.log('Client connect',socket.id);

    socket.on('disconnect',()=>{
        console.log('Cient disconnect',socket.id);
    });

    socket.on('send-message-content', (payload , callback) => {
        
        const idGenerated = 'soyunaIDinventada';
        callback({id:idGenerated,date:new Date().getTime()});

        //socket.emit('send-message-content',payload); // Envia el mensaje al emisor y excluye a todos los receptores
        socket.broadcast.emit('send-message-content',payload); // Envia el mensaje a todos los receptores y excluye al emisor

    })
}


module.exports = {
    socketController
}