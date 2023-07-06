
//TODO
enum roomType {
    'SingleChat', 'GroupChat'
}

interface IRoom {
    _id: Types.ObjectId,
    roomType: roomType,
    admins: Types.Array<string>,
    guests: Types.Array<string>,
    messages:
}

export default IRoom