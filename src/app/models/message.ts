export class Message {
    messageId!: number; // Assuming messageId is a unique identifier for each message
    fromUsername!: string;
    toUsername!: string;
    message!: string;
    id?: number;
}
