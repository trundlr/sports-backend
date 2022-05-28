import incomingMessage = require('./incoming-message');
import outgoingMessage = require('./outgoing-message');

class MessageHandler {
    async handleMessage(message: incomingMessage) {
        const messageType = message.messageType;
        let response: outgoingMessage = { messageType: "", messageBody: "" };

        switch (messageType) {
            case "AUTH":
                response = await handleAuthMessage(message);
                break;
            default:
                response.messageType = "ERR";
                response.messageBody = "Unknown message type. Your request has been dropped.";
                break;
        }

        return response;
    }
}

export = new MessageHandler();

async function handleAuthMessage(message: incomingMessage) {
    return { messageType: "AUTH", messageBody: "Authentication denied." };
}