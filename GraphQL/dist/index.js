import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
    type Sport {
        id: String
        name: String
        metrics: [Metric]
        tournaments: [Tournament]
    }

    type Query {
        sports: [Sport]
        sport(input: SportInput): Sport
    }

    type Metric {
        id: String
        sportId: String
        sportName: String
        name: String
        metricValues: [MetricValue]
    }

    type MetricValue {
        id: String
        value: String
        metricId: String
    }

    type Tournament {
        id: String
        name: String
        location: String
        date: String
    }

    input SportInput {
        sportId: String
    }
`;
const resolvers = {
    Query: {
        sports: async () => {
            return await getSports();
        },
        sport: async (_, { input }) => {
            try {
                return await getSport(input.sportId);
            }
            catch (error) {
                return error;
            }
        }
    },
    Sport: {
        metrics: async (sport) => {
            return await getSportMetrics(sport.id);
        },
        tournaments: async (sport) => {
            return await getSportTournaments(sport.id);
        }
    },
    Metric: {
        metricValues: async (metric) => {
            return await getMetricValues(metric);
        }
    }
};
async function getSports() {
    const url = 'http://localhost:5253/Sports';
    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });
    const resultJson = await result.json();
    return resultJson;
}
async function getSport(sportId) {
    const url = `http://localhost:5253/Sports/${sportId}`;
    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });
    const resultJson = await result.json();
    return resultJson;
}
async function getSportMetrics(sportId) {
    const url = `http://localhost:5253/Sports/${sportId}/metrics`;
    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });
    const resultJson = await result.json();
    return resultJson;
}
async function getMetricValues(metric) {
    const url = `http://localhost:5253/Sports/${metric.sportId}/metrics/${metric.id}/values`;
    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });
    const resultJson = await result.json();
    return resultJson;
}
async function getSportTournaments(sportId) {
    const url = `http://localhost:5253/Sports/${sportId}/tournaments`;
    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });
    const resultJson = await result.json();
    return resultJson;
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
