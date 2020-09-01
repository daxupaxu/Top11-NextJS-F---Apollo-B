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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Post_1 = require("./models/Post");
exports.resolvers = {
    Query: {
        posts: () => Post_1.Post.find(),
    },
    Mutation: {
        createPost: (_, { author, content }) => __awaiter(void 0, void 0, void 0, function* () {
            const post = new Post_1.Post({
                author,
                content,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            yield post.save();
            return post;
        }),
        deletePost: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const post = Post_1.Post.findByIdAndDelete(id);
            return post;
        }),
        updatePost: (_, { id, content }) => __awaiter(void 0, void 0, void 0, function* () {
            const post = Post_1.Post.findByIdAndUpdate(id, {
                content,
                updatedAt: new Date(),
            });
            return post;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map