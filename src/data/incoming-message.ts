interface IncomingMessage {
    clientId: string,
    authToken: string,
    messageType: string,
    messageBody: string,
    isServer: boolean
}

export = IncomingMessage;