"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
class Logger {
    static debug(...message) {
        if (!this.logger)
            new Logger();
        this.logger.debug(message);
    }
    static info(...message) {
        if (!this.logger)
            new Logger();
        this.logger.info(message);
    }
    static warn(...message) {
        if (!this.logger)
            new Logger();
        this.logger.warn(message);
    }
}
Logger.logger = (0, pino_1.default)({});
exports.default = Logger;
