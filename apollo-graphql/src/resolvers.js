const categories = [
  {
    category: "Electric Cars",
  },
  {
    category: "New language",
  },
  {
    category: "Games",
  },
  {
    category: "Books",
  },
];
const articles = [
  {
    id: 1,
    title: "Tesla as a bestseller in 2020?",
    name: "Electric Cars",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac interdum dui. Ut sed aliquet nulla. Ut bibendum tincidunt nisi, at rutrum velit bibendum at. Nullam commodo nisi eget tempus porta. In quis tempus enim. Nulla tincidunt quis eros quis maximus. Ut sed convallis erat. In in felis id nisi blandit commodo at eu metus. Quisque dolor massa, sollicitudin a massa a, dignissim accumsan sapien. Duis ac mauris ac nisl facilisis iaculis. Phasellus volutpat urna quis luctus porta. Nam auctor lectus nibh, nec dignissim massa dictum vel. In sagittis ac lorem id blandit. Vivamus convallis ipsum quis molestie lacinia. Phasellus volutpat, nulla quis rutrum fermentum, orci mauris sodales est, eu mollis nisi orci scelerisque justo. Phasellus volutpat faucibus rhoncus.",
    rate: 5,
  },
  {
    id: 2,
    title: "What are the top 11 games in 2020?",
    name: "Games",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac interdum dui. Ut sed aliquet nulla. Ut bibendum tincidunt nisi, at rutrum velit bibendum at. Nullam commodo nisi eget tempus porta. In quis tempus enim. Nulla tincidunt quis eros quis maximus. Ut sed convallis erat. In in felis id nisi blandit commodo at eu metus. Quisque dolor massa, sollicitudin a massa a, dignissim accumsan sapien. Duis ac mauris ac nisl facilisis iaculis. Phasellus volutpat urna quis luctus porta. Nam auctor lectus nibh, nec dignissim massa dictum vel. In sagittis ac lorem id blandit. Vivamus convallis ipsum quis molestie lacinia. Phasellus volutpat, nulla quis rutrum fermentum, orci mauris sodales est, eu mollis nisi orci scelerisque justo. Phasellus volutpat faucibus rhoncus.",
    rate: 5,
  },
  {
    id: 3,
    title: "Can books still fill our e-world?",
    name: "Books",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac interdum dui. Ut sed aliquet nulla. Ut bibendum tincidunt nisi, at rutrum velit bibendum at. Nullam commodo nisi eget tempus porta. In quis tempus enim. Nulla tincidunt quis eros quis maximus. Ut sed convallis erat. In in felis id nisi blandit commodo at eu metus. Quisque dolor massa, sollicitudin a massa a, dignissim accumsan sapien. Duis ac mauris ac nisl facilisis iaculis. Phasellus volutpat urna quis luctus porta. Nam auctor lectus nibh, nec dignissim massa dictum vel. In sagittis ac lorem id blandit. Vivamus convallis ipsum quis molestie lacinia. Phasellus volutpat, nulla quis rutrum fermentum, orci mauris sodales est, eu mollis nisi orci scelerisque justo. Phasellus volutpat faucibus rhoncus.",
    rate: 5,
  },
  {
    id: 4,
    title: "How novadays ppl learns new technologies?",
    name: "New language",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac interdum dui. Ut sed aliquet nulla. Ut bibendum tincidunt nisi, at rutrum velit bibendum at. Nullam commodo nisi eget tempus porta. In quis tempus enim. Nulla tincidunt quis eros quis maximus. Ut sed convallis erat. In in felis id nisi blandit commodo at eu metus. Quisque dolor massa, sollicitudin a massa a, dignissim accumsan sapien. Duis ac mauris ac nisl facilisis iaculis. Phasellus volutpat urna quis luctus porta. Nam auctor lectus nibh, nec dignissim massa dictum vel. In sagittis ac lorem id blandit. Vivamus convallis ipsum quis molestie lacinia. Phasellus volutpat, nulla quis rutrum fermentum, orci mauris sodales est, eu mollis nisi orci scelerisque justo. Phasellus volutpat faucibus rhoncus.",
    rate: 5,
  },
  {
    id: 5,
    title: "Frontend vs backend?",
    name: "New language",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac interdum dui. Ut sed aliquet nulla. Ut bibendum tincidunt nisi, at rutrum velit bibendum at. Nullam commodo nisi eget tempus porta. In quis tempus enim. Nulla tincidunt quis eros quis maximus. Ut sed convallis erat. In in felis id nisi blandit commodo at eu metus. Quisque dolor massa, sollicitudin a massa a, dignissim accumsan sapien. Duis ac mauris ac nisl facilisis iaculis. Phasellus volutpat urna quis luctus porta. Nam auctor lectus nibh, nec dignissim massa dictum vel. In sagittis ac lorem id blandit. Vivamus convallis ipsum quis molestie lacinia. Phasellus volutpat, nulla quis rutrum fermentum, orci mauris sodales est, eu mollis nisi orci scelerisque justo. Phasellus volutpat faucibus rhoncus.",
    rate: 5,
  },
  {
    id: 6,
    title: "Is architecture in development is as hard as people think?",
    name: "Books",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac interdum dui. Ut sed aliquet nulla. Ut bibendum tincidunt nisi, at rutrum velit bibendum at. Nullam commodo nisi eget tempus porta. In quis tempus enim. Nulla tincidunt quis eros quis maximus. Ut sed convallis erat. In in felis id nisi blandit commodo at eu metus. Quisque dolor massa, sollicitudin a massa a, dignissim accumsan sapien. Duis ac mauris ac nisl facilisis iaculis. Phasellus volutpat urna quis luctus porta. Nam auctor lectus nibh, nec dignissim massa dictum vel. In sagittis ac lorem id blandit. Vivamus convallis ipsum quis molestie lacinia. Phasellus volutpat, nulla quis rutrum fermentum, orci mauris sodales est, eu mollis nisi orci scelerisque justo. Phasellus volutpat faucibus rhoncus.",
    rate: 5,
  },
];

const resolvers = {
  Query: {
    categories: () => categories,
    articles: () => articles,
  },
  Article: {
    name(parent) {
      return articles.filter((article) => article.name === parent.name);
    },
  },
};
module.exports = { resolvers };
