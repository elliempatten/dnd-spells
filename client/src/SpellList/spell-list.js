import React from 'react';
import style from './spell-list.module';
import LevelTable from '../LevelTable';

const SpellList = ({ spellList }) => {
  return (
    <div className={style.allSpells}>
      {spellList.map(({ level, spells }) => (
        <LevelTable level={level} spells={spells} key={`level-${level}`} />
      ))}
    </div>
  );
};

export default SpellList;
