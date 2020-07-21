import React, { useState } from 'react';
import Spell from '../Spell';
import AddSpellsIcon from '../AddSpellsBar';
import style from './level-table.module';

const LevelTable = ({ level, spells }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={style.levelTable}>
      <h2 className={style.levelHeading}>
        Level {level}{' '}
        <button className={style.expandButton} onClick={handleExpandClick}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </h2>

      {isExpanded && spells.map(spell => <Spell {...spell} key={spell.id} />)}
      {isExpanded && <AddSpellsIcon level={level} />}
    </div>
  );
};

export default LevelTable;
