import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    playerId: string;
    authToken: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    playerId: { type: String, required: true },
    authToken: { type: String, required: true }
});

export = model<IUser>('User', UserSchema);