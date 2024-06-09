import { gql } from 'apollo-server-express';
const typeDefs = gql `#graphql
    type Sport {
        id: ID
        name: string
    }

    type Query {
        sports: [Sport]
    }
`;
export default typeDefs;
