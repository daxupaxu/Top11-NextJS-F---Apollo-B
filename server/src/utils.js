const { Sequelize } = require("sequelize");

module.exports.createStore = () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const articles = db.define("article", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: Sequelize.STRING,
    content: Sequelize.STRING,
    rate: Sequelize.INTEGER,
  });

  const categories = db.define("category", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
  });

  return { db, articles, categories };
};
