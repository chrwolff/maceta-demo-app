import { PostsController } from "./PostsController";
import { ODataServer, odata } from "odata-v4-server";

@odata.namespace("my.data")
@odata.controller(PostsController, true)
class PostsServer extends ODataServer {}

export const Server = [PostsServer];

//also valid when there is only one server to export
//export const Server = PostsServer;