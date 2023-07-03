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
const joi_1 = __importDefault(require("joi"));
const Logger_1 = __importDefault(require("../libs/Logger"));
const messageDeleteSchema = joi_1.default.object({
    _id: joi_1.default.string()
});
class MessageValidator {
    static deleteMessageById(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            Logger_1.default.info('[Controller][deleteMessageById] Deleting message by id with params', payload);
            try {
                const test = yield messageDeleteSchema.validate({ _id: payload });
                if (test.error)
                    throw new Error("validation Error");
                return yield messageDeleteSchema.validate({ _id: payload });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = MessageValidator;
