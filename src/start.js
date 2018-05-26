import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import cors from "cors";
import mongoose from "./config/mongoose";
import dotenv from "dotenv";
import graphql from "./routes/graphql";
import graphiql from "./routes/graphiql";

export const start = async () => {
  try {
    await dotenv.config();
    await mongoose.connect();

    const app = express();

    app.use(cors());

    app.use("/graphql", graphql);
    const homePath = "/graphiql";
    app.use(homePath, graphiql);

    app.listen(process.env.PORT, () => {
      console.log(`Visit ${process.env.URL}:${process.env.PORT}${homePath}`);
    });
  } catch (e) {
    console.log(e);
  }
};
