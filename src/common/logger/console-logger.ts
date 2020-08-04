import {injectable} from "inversify";
import {ILogger} from "./logger";

@injectable()
export class ConsoleLogger implements ILogger {
    private _console: Console;

    public static create(): ILogger {
        return new ConsoleLogger(console);
    }

    public static createNull(): ILogger {
        return new NullLogger()
    }

    private constructor(con: Console) {
        this._console = con;
    }

    public info(message: string): void {
        this.writeTo(message);
    }

    public debug(message: string): void {
        this.writeTo(message);
    }

    public warn(message: string): void {
        this.writeTo(message);
    }

    public error(message: string): void {
        this.writeTo(message);
    }

    private writeTo(log: string){
        console.log(log);
    }
}

export class NullLogger implements ILogger {
    private lastLogMessage: string;

    public info(message: string): void {
        this.lastLogMessage = message;
    }

    public debug(message: string): void {
        this.lastLogMessage = message;
    }

    public warn(message: string): void {
        throw new Error("Method not implemented.");
    }

    public error(message: string): void {
        throw new Error("Method not implemented.");
    }

    public getLastLogMessage() {
        return this.lastLogMessage;
    }
}
