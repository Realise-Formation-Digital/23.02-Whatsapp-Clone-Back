import { Types} from 'mongoose';

enum roomType {
    'SingleChat', 'GroupChat'
}

interface IRoom {
    _id: Types.ObjectId,
    roomType: roomType,
    admins: Types.Array<string>,
    guests: Types.Array<string>
}

export default IRoom