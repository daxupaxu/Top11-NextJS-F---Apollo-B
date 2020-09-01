"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Post = mongoose_1.default.model("Post", {
    author: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
});
//# sourceMappingURL=Post.js.map