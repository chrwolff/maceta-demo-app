"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./connect");
const randomWords = require("random-words");
const randomTimestamp = require("random-hammertime");
const generateName = require('sillyname');
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield connect_1.default();
            yield db.collection("Posts").drop();
            yield db.collection("Posts").insertMany(getRandomDocs());
        }
        catch (e) {
            console.error(`Document creation failed: ${e}`);
        }
        process.exit();
    });
}
function getRandomDocs() {
    let docs = [];
    for (let i = 0; i < 100; ++i) {
        docs.push({
            userName: generateName(),
            text: randomWords({ min: 10, max: 100, join: " " }),
            time: randomTimestamp(),
            isTemplate: false
        });
    }
    return docs;
}
create();
//# sourceMappingURL=createData.js.map