export default `
    scalar Date
    type Query {
        greet: String
        greetTo(name: String!): String
        greetEdi: String
        getDate: String
        getToday: Date
    }
    type Mutation {
        changeName(name: String!): Int
    }
    schema {
        query: Query
        mutation: Mutation
    }
`
