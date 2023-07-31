// HTML References

const statusOn    = document.querySelector('#status-on');
const statusOff   = document.querySelector('#status-off');
const textMessage = document.querySelector('#text-message');
const sendMessage = document.querySelector('#send-message');

const socket = io();

socket.on('connect',() => {
    console.log('Client connected');
    
    statusOn.style.display = '';
    statusOff.style.display = 'none';
});

socket.on('disconnect',() => {
    console.log('Client disconnected');

    statusOff.style.display = '';
    statusOn.style.display = 'none';
});

socket.on('send-message-content',(payload) => {
    console.log('Server info: ',payload);
});

sendMessage.addEventListener('click',() => {
    const messageContent = textMessage.value;
    const payload = {
        messageContent,
        socket_id: socket.id,
        time: new Date().getTime()
    }
    
    socket.emit('send-message-content',payload,(response) => {
        console.log(`Message generated. ID: ${response.id}, DATE: ${response.date}`)
    });
});