import { ObjectID } from "mongodb";
export default class Post {
    _id: ObjectID;
    userName: any;
    text: any;
    time: any;
    isTemplate: any;
}
