import {Command} from "../command";
import {Constants} from "../../../constants/constants";
import {Interaction} from "../../../constants/interfaces";

export class Ping extends Command {
    constructor() {
        super(Constants.PING, 'Ping!');
    }

    execute(data: Interaction, callback: (response: string) => void): void {
        callback('Pong!');
    }
}
