import express from "express";
import {
    graphiqlExpress
} from 'apollo-server-express';

const router = express.Router();
router.use('/', graphiqlExpress({
    endpointURL: '/graphql'
}))
export default router;