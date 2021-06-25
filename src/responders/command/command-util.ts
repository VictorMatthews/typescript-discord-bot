import {Command} from "./command";
import {Ping} from "./commands/ping";

export class CommandUtil {
    private static PING = new Ping();

    private static COMMANDS: Map<string, Command> = new Map([
        [CommandUtil.PING.name, CommandUtil.PING]
    ]);

    public static SLASH_COMMANDS = [
        {
            name: CommandUtil.PING.name,
            description: CommandUtil.PING.description,
        }
    ];

    static getCommandHandler(name: string): Command {
        const command = CommandUtil.COMMANDS.get(name);
        return command as Command;
    }
}
