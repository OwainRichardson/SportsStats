// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        sports: () => sports,
    },
};
const sports = [
    {
        id: '6dd5de71-06db-4344-9b90-0c4371b795b1',
        name: 'Kate Chopin - SPORT'
    }
];
export default resolvers;
