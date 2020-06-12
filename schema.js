const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    spells: [Spell]
    spell(id: String!): Spell
  }
  type Spell {
    id: String!
    is_from_item: Boolean
    item_name: String
    total_charges: Int
    remaining_charges: Int
    recharge_frequency: String
    is_intrinsic: Boolean
  }
`;

exports.typeDefs = typeDefs;
