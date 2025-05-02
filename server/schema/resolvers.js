const resolvers = {
    Query: {
        hello: () => 'Hello from GraphQL!',
    },
    Mutation: {
        bookAppointment: (_, { name, date }) => {
            return `Appointment booked for ${name} on ${date}`;
        },
    },
};

module.exports = resolvers;