const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    spells: [Spell]
    spell(id: String!): Spell
    spellDetails: [DetailedSpell]
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
  type DetailedSpell {
    id: String!
    duration: String
    description: String
    features: [String]
    castingTime: String
    range: String
    name: String!
  }
`;

exports.typeDefs = typeDefs;
