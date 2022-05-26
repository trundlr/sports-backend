import { WebSocket } from 'ws';
import incomingMessage = require('./data/incoming-message');

const wss = new WebSocket.Server({ port: 8080 });

let sockets = []
wss.on('connection', (socket: WebSocket) => {
    sockets.push(socket);

    socket.on('message', (inboundMessage: string) => {
        let parsedMessage = <incomingMessage>JSON.parse(inboundMessage);
        console.log('Received a message: %s', parsedMessage.messageBody);

        socket.send(`Hello, you sent -> ${JSON.stringify(parsedMessage)}`);
    });

    socket.send('Hello there, you have connected to the server.')
})