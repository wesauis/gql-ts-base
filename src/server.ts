import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import schema from "./schema";

const createServer = () => new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
});

export default createServer;
