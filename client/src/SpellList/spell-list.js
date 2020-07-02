import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getSpellQuery = gql`
  {
    spells {
      id
    }
  }
`;

const Spells = () => {
  const { loading, error, data } = useQuery(getSpellQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error loading your spells.</p>;

  return (
    <div>
      {data.spells.map(({ id }) => (
        <p key={`spell.${id}`}>{id}</p>
      ))}
    </div>
  );
};

export default Spells;
