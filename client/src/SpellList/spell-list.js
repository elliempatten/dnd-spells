import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import style from './spell-list.module';
import Spell from '../Spell';

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
};

const exampleSpell = {
  castingTime: '1 action',
  duration: '1 minute',
  features: ['Concentration'],
  range: '60 feet',
  name: 'Faerie Fire',
  description:
    'Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible.'
};

const SpellList = () => {
  return (
    <div className={style.spellsTable}>
      <Spell {...exampleSpell} />
    </div>
  );
};

export default SpellList;
