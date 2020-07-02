import React from 'react';
import style from './spell-list.module';
import Spell from '../Spell';

const SpellList = ({ spells }) => {
  return (
    <div className={style.spellsTable}>
      {spells.map(spell => (
        <Spell {...spell} key={spell.id} />
      ))}
    </div>
  );
};

export default SpellList;
