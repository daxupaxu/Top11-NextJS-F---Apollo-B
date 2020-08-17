const { DataSource } = require("apollo-datasource");

class UserAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }
  initialize(config) {
    this.context = config.context;
  }
  async getCategories({} = {}) {
    // get categories function here
  }
  async getArticles({} = {}) {
    // get articles function here
  }
}

module.exports = UserAPI;
