import React, { useState } from 'react';
import Spell from '../Spell';
import Icon from '../Icon';
import AddSpellsButton from '../AddSpellsButton';
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
        <div className={style.buttonGroup}>
        <ButtonWithIcon
          icon={'plus'}
          onClick={()=>{}}
          size={'small'}
        >
          Add
        </ButtonWithIcon>
        <div className={style.padding}></div>
        <ButtonWithIcon
          icon={isExpanded ? 'chevron-up' : 'chevron-down'}
          onClick={handleExpandClick}
          size={'medium'}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </ButtonWithIcon></div>
      </h2>
      <div className={style.spellsContainer}>
        {spells.map(spell => (
          <Spell {...spell} key={spell.id} />
        ))}
        <AddSpellsButton level={level} />
      </div>
    </div>
  );
};

export default LevelTable;
