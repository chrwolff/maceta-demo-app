"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostsController_1 = require("./PostsController");
const odata_v4_server_1 = require("odata-v4-server");
let PostsServer = class PostsServer extends odata_v4_server_1.ODataServer {
};
PostsServer = __decorate([
    odata_v4_server_1.odata.namespace("my.data"),
    odata_v4_server_1.odata.controller(PostsController_1.PostsController, true)
], PostsServer);
exports.Server = [PostsServer];
//also valid when there is only one server to export
//export const Server = PostsServer;
//# sourceMappingURL=service.js.map