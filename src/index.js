const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `  
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('server is running on port 4000'))