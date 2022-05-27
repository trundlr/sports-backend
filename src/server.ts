import 'dotenv/config';

import { WebSocket } from 'ws';
import { connect } from 'mongoose';
import auth = require('./auth/auth');
import incomingMessage = require('./data/incoming-message');
import player = require('./db/models/player');

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
        let parsedMessage = <incomingMessage>JSON.parse(inboundMessage);
        console.log('Received a message: %s', parsedMessage.messageBody);

        if (!parsedMessage.isServer) {
            const pl = new player({
                name: "test",
                playerId: parsedMessage.clientId,
                authToken: auth.generateUUIDv4()
            });

            pl.save();
        }

        socket.send(`Hello, you sent -> ${JSON.stringify(parsedMessage)}`);
    });

    socket.send('Hello there, you have connected to the server.')
})