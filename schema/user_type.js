const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        posts: {
            // resolves the circular dependency
            type: new GraphQLList(require("./post_type")),
            resolve(parentValue) {
              return (
                User.findById(parentValue.id)
                  .populate("posts")
                  .then(user => user.posts)
              );
            }
          }
      })
  });

  module.exports = UserType;