import React, { useState } from 'react';
import style from './spell.module';

const Spell = ({
  castingTime,
  range,
  duration,
  name,
  description,
  features,
}) => {
  const featuresAsString = features.join(', ');
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <tr
        className={style.spellEntry}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <td>{name}</td>
        <td>{castingTime}</td>
        <td>{range}</td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan="3" className={style.expandedDetails}>
            <p>
              <span style={{ fontWeight: 'bold' }}>Duration:</span> {duration}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Features:</span>{' '}
              {featuresAsString ? featuresAsString : 'N/A'}
            </p>
            <p>{description}</p>
          </td>
        </tr>
      )}
    </>
  );
};

export default Spell;
