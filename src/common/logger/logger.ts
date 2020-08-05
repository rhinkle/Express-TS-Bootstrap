export interface ILogger {
    debug(message: string): void,
    info(message: string): void,
    cats(message: string): void
    error(message: string): void
}
