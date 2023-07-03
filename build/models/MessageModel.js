"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("../libs/Logger"));
const MessageDao_1 = __importDefault(require("../db/MessageDao"));
const Socket_1 = __importDefault(require("../libs/Socket"));
class MessageModel {
    static messageIdToDelete(messageIdToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //get room id to send message to each other
                const result = yield MessageDao_1.default.deleteMessageById(messageIdToDelete);
                if (result)
                    Socket_1.default.emit('deleted-message', {
                        roomId: null,
                        messageId: null
                    });
            }
            catch (e) {
                Logger_1.default.warn(e);
                throw new Error(e);
            }
        });
    }
    static insertMessage(username, roomId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                Logger_1.default.info('[Model][InsertMessage] Inserting message with params', username, message, roomId);
                //get room id to send message to each other
                const result = yield MessageDao_1.default.insertMessage(username, roomId, message);
                if (result)
                    Socket_1.default.emit('inserted-message', {
                        roomId: roomId,
                        message: message,
                        username: username
                    });
            }
            catch (e) {
                Logger_1.default.warn(e);
                throw new Error(e);
            }
        });
    }
}
exports.default = MessageModel;
