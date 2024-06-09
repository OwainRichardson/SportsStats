import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { SportsApiResponse, SportApiResponse } from './types/SportsApiResponse';
import { MetricApiResponse, MetricsApiResponse } from './types/MetricsApiResponse';
import { MetricValuesApiResponse, MetricValueApiResponse } from './types/MetricValuesApiResponse';
import { SportInput } from './types/SportInput'

const typeDefs = `#graphql
    type Sport {
        id: String
        name: String
        metrics: [Metric]
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

    input SportInput {
        sportId: String
    }
`;

const resolvers = {
    Query: {
      sports: async () => {
        return await getSports();
      },
      sport: async (_: unknown, { input }: SportInput) => {
        try {
            return await getSport(input.sportId);
        } catch (error) {
            return error;
        }
      }
    },
    Sport: {
        metrics: async (sport: SportApiResponse) => {
            return await getSportMetrics(sport.id);
        }
    },
    Metric: {
        metricValues: async (metric: MetricApiResponse) => {
            return await getMetricValues(metric);
        }
    }
  };

async function getSports() : Promise<SportsApiResponse> {
    const url = 'http://localhost:5253/Sports';

    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });

    const resultJson = await result.json() as any;

    return resultJson;
}

async function getSport(sportId: String) : Promise<SportApiResponse> {
    const url = `http://localhost:5253/Sports/${sportId}`;

    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });

    const resultJson = await result.json() as any;

    return resultJson;
}

async function getSportMetrics(sportId: String) : Promise<MetricsApiResponse> {
    const url = `http://localhost:5253/Sports/${sportId}/metrics`;

    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });

    const resultJson = await result.json() as any;

    return resultJson;
}

async function getMetricValues(metric: MetricApiResponse) : Promise<MetricValuesApiResponse> {
    const url = `http://localhost:5253/Sports/${metric.sportId}/metrics/${metric.id}/values`;

    const result = await fetch(url, {
        headers: new Headers({
            Accept: 'application/json'
        })
    });

    const resultJson = await result.json() as any;

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