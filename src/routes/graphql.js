import express from "express";
import bodyParser from 'body-parser';
import {
    graphqlExpress
} from 'apollo-server-express';
import {
    makeExecutableSchema
} from 'graphql-tools'
import typeDefs from "../schemas";
import resolvers from "../resolvers";
const router = express.Router();
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
router.use('/', bodyParser.json(),graphqlExpress({
    schema
}))
export default router;