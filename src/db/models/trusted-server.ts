import { Schema, model, connect } from 'mongoose';

interface ITrustedServer {
    serverName: string;
    authToken: string;
}

const TrustedServerSchema: Schema = new Schema({
    serverName: { type: String, required: true },
    authToken: { type: String, required: true }
})

export = model<ITrustedServer>('TrustedServer', TrustedServerSchema);