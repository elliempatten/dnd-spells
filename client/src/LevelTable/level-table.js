import React, { useState } from 'react';
import Spell from '../Spell';
import Icon from '../Icon';
import AddSpellsButton from '../AddSpellsButton';
import style from './level-table.module';
import ButtonWithIcon from '../ButtonWithIcon';

const LevelTable = ({ level, spells }) => {
  const [isExpanded, setIsExpanded] = useState(spells.length > 0);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={style.levelTable}>
      <h2 className={style.levelHeading}>
        Level {level}{' '}
        <div className={style.buttonGroup}>
          <AddSpellsButton level={level} />
          <div className={style.padding}></div>
          <ButtonWithIcon
            icon={isExpanded ? 'chevron-up' : 'chevron-down'}
            onClick={handleExpandClick}
            size={'medium'}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </ButtonWithIcon>
        </div>
      </h2>
      {isExpanded && (
        <table className={style.spellsContainer}>
          <th className={style.name}>Name</th>
          <th className={style.castingTime}>Casting Time</th>
          <th className={style.range}>Range</th>
          {spells.map((spell) => (
            <Spell {...spell} key={spell.id} />
          ))}
        </table>
      )}
    </div>
  );
};

export default LevelTable;
