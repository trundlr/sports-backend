import { v4 as uuidv4 } from 'uuid';
import trustedServer = require('../db/models/trusted-server');
import player = require('../db/models/player');
import incomingMessage = require('../data/incoming-message');

class Auth {
    /**
     * Async function to determine whether a player exists in our persistence solution.
     * 
     * @param data The message from the WS client attempting to authenticate.
     * @returns True, if the player exists.
     */
    async checkPlayerExists(data: incomingMessage) {
        const pl = await player.exists({ playerId: data.clientId });
        if (pl) {
            return true;
        }
    }

    /**
     * Async function to determine whether a player's token is valid.
     * 
     * @param data The message from the WS client attempting to authenticate.
     * @returns True, if the token exists and is valid for the player.
     */
    async checkClientTokenIsValid(data: incomingMessage) {
        const pl = await player.exists({ playerId: data.clientId, token: data.authToken });
        if (pl) {
            return true;
        }
    }

    /**
     * Async function to determine whether a server's token is valid.
     * 
     * @param data The message from the WS client attempting to authenticate.
     * @returns True, if the token exists and is valid for the server.
     */
    async checkServerTokenIsValid(data: incomingMessage) {
        const server = await trustedServer.exists({ serverId: data.clientId, token: data.authToken });
        if (server) {
            return true;
        }
    }

    generateUUIDv4() {
        return uuidv4();
    }
}

export = new Auth();