import React from 'react';
import style from './spell-list.module';
import LevelTable from '../LevelTable';
import Banner from '../Banner';

const SpellList = ({ spellList }) => {
  return (
    <div className={style.page}>
      <Banner />
      <div className={style.allSpells}>
        {spellList.map(({ level, spells }) => (
          <LevelTable level={level} spells={spells} key={`level-${level}`} />
        ))}
      </div>
    </div>
  );
};

export default SpellList;
