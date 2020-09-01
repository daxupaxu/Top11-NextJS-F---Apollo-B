import { Post } from "./models/Post";
export const resolvers = {
  Query: {
    posts: () => Post.find(),
  },
  Mutation: {
    createPost: async (_, { author, content }) => {
      const post = new Post({
        author,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await post.save();
      return post;
    },
    deletePost: async (_, { id }) => {
      const post = Post.findByIdAndDelete(id);
      return post;
    },
    updatePost: async (_, { id, content }) => {
      const post = Post.findByIdAndUpdate(id, {
        content,
        updatedAt: new Date(),
      });
      return post;
    },
  },
};
