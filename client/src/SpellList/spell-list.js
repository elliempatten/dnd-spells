import React from 'react';
import style from './spell-list.module';
import Spell from '../Spell';

const SpellList = ({ spellList }) => {
  return spellList.map(({ level, spells }) => {
    return (
      <div>
        <h2>Level {level}</h2>
        <div className={style.spellsTable}>
          {spells.map(spell => (
            <Spell {...spell} key={spell.id} />
          ))}
        </div>
      </div>
    );
  });
};

export default SpellList;
