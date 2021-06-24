import {Message} from "discord.js";
import {Command} from "../command";
import {Constants} from "../../constants/constants";

export class Ping extends Command {
    constructor() {
        super(Constants.PING, 'Ping!');
    }

    public execute(msg: Message, args: string[]): void {
        this.sendMessage(msg, 'pong');
    }
}
