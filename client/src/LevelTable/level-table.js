import React, { useState } from 'react';
import Spell from '../Spell';
import Icon from '../Icon';
import AddSpellsIcon from '../AddSpellsBar';
import style from './level-table.module';
import ButtonWithIcon from '../ButtonWithIcon';

const LevelTable = ({ level, spells }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={style.levelTable}>
      <h2 className={style.levelHeading}>
        Level {level}{' '}
        <ButtonWithIcon
          icon={isExpanded ? 'chevron-up' : 'chevron-down'}
          onClick={handleExpandClick}
          size={'medium'}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </ButtonWithIcon>
      </h2>

      {isExpanded && spells.map(spell => <Spell {...spell} key={spell.id} />)}
      {isExpanded && <AddSpellsIcon level={level} />}
    </div>
  );
};

export default LevelTable;
