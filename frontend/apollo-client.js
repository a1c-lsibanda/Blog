import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: "http://illnamethisbloglater.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
