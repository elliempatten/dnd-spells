import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import SpellList from './spell-list';

const getSpellsQuery = gql`
  {
    spellDetails {
      level
      spells {
        id
        duration
        description
        castingTime
        features
        name
      }
    }
  }
`;

const SpellListWithData = () => {
  const { loading, error, data } = useQuery(getSpellsQuery);
  if (loading) return <p>Loading...</p>;
  if (error || !data || !data.spellDetails)
    return <p>There was an error loading your spells.</p>;

  return <SpellList spellList={data.spellDetails} />;
};

export default SpellListWithData;
