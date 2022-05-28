import 'dotenv/config';

import { WebSocket } from 'ws';
import { connect } from 'mongoose';

import incomingMessage = require('./data/incoming-message');
import outgoingMessage = require('./data/outgoing-message');
import messageHandler = require('./data/message-handler');

// Initialize MongoDB
initializeMongoConnection().catch(err => console.log(err));

async function initializeMongoConnection() {
    await connect(process.env.MONGO_URI_STRING!);
}

// Configure WebSocket Server
const wss = new WebSocket.Server({ port: 8080 });

let sockets = []
wss.on('connection', (socket: WebSocket) => {
    sockets.push(socket);

    socket.on('message', (inboundMessage: string) => {
        const parsedMessage = <incomingMessage>JSON.parse(inboundMessage);

        messageHandler.handleMessage(parsedMessage)
            .then((response: outgoingMessage) => {
                if (response !== undefined) {
                    socket.send(JSON.stringify(response));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });

    socket.send('Socket connection ACK');
});