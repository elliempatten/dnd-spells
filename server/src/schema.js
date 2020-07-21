const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    spells: [Spell]
    spell(id: String!): Spell
    spellDetails: [spellsByLevel]
  }
  """
  A spell, as stored in the database. Contains the information required to retrieve a spell from the SRD,
  and any custom fields.
  id: the ID of the spell in the Open5E API
  is_from_item: a boolean indicating whether the player can cast the spell as part of an item's ability
  item_name: optional field for the name of the item, if is_from_item is true
  total_charges: the maximum number of uses of the spell per recharge frequency
  remaining_charges: the number of uses of the spell the player has remaining
  recharge_frequency: a string representing how the ability/item recharges
  is_intrinsic: a boolean representing whether the player always has this ability without it counting towards prepared spells
  (eg. a racial trait)
  """
  type Spell {
    id: String!
    is_from_item: Boolean
    item_name: String
    total_charges: Int
    remaining_charges: Int
    recharge_frequency: String
    is_intrinsic: Boolean
  }
  """
  Represents all the spells of a certain level.
  level: the level of the spells, as an integer, with Cantrips as level 0
  spells: a list of spells
  """
  type spellsByLevel {
    level: Int!
    spells: [DetailedSpell]!
  }
  """
  Key details of a spell from the SRD. Represents the format in which this will be shown to the player.
  id: unique identifier for the spell
  duration: how long the spell lasts after casting
  description: a description of the spell
  features: an array of features, such as whether the spell is a concentration spell, or a ritual
  castingTime: how long is required to cast the spell
  range: the reach of the spell
  name: the human-readable name of the spell
  level: the minimum level the spell can be prepared and cast at
  """
  type DetailedSpell {
    id: String!
    duration: String
    description: String
    features: [String]
    castingTime: String
    range: String
    name: String!
    level: Int@
  }
`;

exports.typeDefs = typeDefs;
