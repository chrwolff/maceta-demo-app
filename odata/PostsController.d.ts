import { ODataController, ODataQuery } from "odata-v4-server";
import Post from "./PostsModel";
export declare class PostsController extends ODataController {
    find(query: ODataQuery): Promise<Post[]>;
    insert(data: any): Promise<Post>;
}
