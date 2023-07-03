import { connect } from 'mongoose';
import {MessageModel} from "./models/MessageModel";
class Mongoose {

    static async connect(){
        try{
            await connect('mongodb://127.0.0.1:27017/test');
        }catch (e) {
            // @ts-ignore
            throw new Error(e)
        }
    }
}

export default Mongoose