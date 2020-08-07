import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import SpellList from './spell-list';

const getUserSpellsQuery = gql`
  {
    userSpellsDetails {
      level
      spells {
        id
        duration
        description
        features
        castingTime
        range
        name
        level
      }
    }
  }
`;

const SpellListWithData = () => {
  const { loading, error, data } = useQuery(getUserSpellsQuery);
  if (loading) return <p>Loading...</p>;
  if (error || !data || !data.userSpellsDetails)
    return <p>There was an error loading your spells.</p>;

  return <SpellList spellList={data.userSpellsDetails} />;
};

export default SpellListWithData;
