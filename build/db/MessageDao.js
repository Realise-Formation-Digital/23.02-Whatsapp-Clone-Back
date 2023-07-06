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
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MessageDao {
    static initializeConnection() {
        const url = process.env.MONGODB_MESSASGES_CONNECTION_STRING;
        this.client = new mongodb_1.MongoClient(url);
        this.database = this.client.db('Messages');
    }
    static createMessageCollection(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.database.createCollection(id);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static deleteMessageById(messageIdToDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return true;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    static insertMessage(username, message, roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return true;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = MessageDao;
