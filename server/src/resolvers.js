module.exports = {
  Query: {
    categories: async (_, __, {dataSources}), => {
      await dataSources.userAPI.getCategories();
    }
    articles: () => articles,
    article: (_, args, {dataSources}) => {
      return dataSources.userAPI.articles.find((article) => article.id == args.id);
    },
  },
};
