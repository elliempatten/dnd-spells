import React from 'react';
import style from './spell.module';

const Spell = ({
  castingTime,
  range,
  duration,
  name,
  description,
  features
}) => {
  const featuresAsString = features.join(', ');
  return (
    <div className={style.spellEntry}>
      <div className={style.spellName}>{name}</div>
      <SpellDetail category="Casting time" detail={castingTime} />
      <SpellDetail category="Range" detail={range} />
      <SpellDetail category="Duration" detail={duration} />
      <SpellDetail category="Features" detail={featuresAsString} />
      <div className={style.description}>{description}</div>
    </div>
  );
};

const SpellDetail = ({ category, detail }) => {
  return (
    <div className={style.spellDetail}>
      <span className={style.categoryTitle}>{category}: </span>
      {detail}
    </div>
  );
};

export default Spell;
