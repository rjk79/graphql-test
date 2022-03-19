const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./config/keys').mongoURI;
const expressGraphQL = require('express-graphql').graphqlHTTP

const User = require("./models/user");
const Post = require("./models/post");
const schema = require("./schema/schema");

app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.use(bodyParser.json()); //middleware to Express

app.listen(5000, () => console.log('Server is running on port 5000'));

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

app.use(webpackMiddleware(webpack(webpackConfig)));