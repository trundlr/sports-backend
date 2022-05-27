import { Schema, model } from 'mongoose';

interface IPlayer {
    name: string;
    playerId: string;
    authToken: string;
}

const PlayerSchema: Schema = new Schema({
    name: { type: String, required: true },
    playerId: { type: String, required: true },
    authToken: { type: String, required: true }
});

export = model<IPlayer>('User', PlayerSchema);