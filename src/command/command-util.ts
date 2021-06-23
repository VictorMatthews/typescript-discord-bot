import {Command} from "./command";
import {Ping} from "./commands/ping";

export class CommandUtil {
    private static PING = new Ping();

    public static COMMANDS: Map<string, Command> = new Map([
        [CommandUtil.PING.name, CommandUtil.PING]
    ]);
}
