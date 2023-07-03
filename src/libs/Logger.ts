import pino from "pino";
class Logger {

    private static logger = pino({});

    static debug(message: string){
        if (!this.logger) new Logger()
        this.logger.debug(message)
    }
    static info(message: string){
        if (!this.logger) new Logger()
        this.logger.info(message)
    }
    static warn(message: string){
        if (!this.logger) new Logger()
        this.logger.warn(message)
    }
}

export default Logger;
