import React, { useState } from 'react';
import style from './add-spells-bar.module';
import Icon from '../Icon';

const AddSpellsBar = ({ level }) => {
  return (
    <button className={style.addCard}>
      <Icon name="plus"></Icon> Add Spells
    </button>
  );
};

export default AddSpellsBar;
