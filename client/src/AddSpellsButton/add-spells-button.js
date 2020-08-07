import React, { useState } from 'react';
import style from './add-spells-button.module';
import Icon from '../Icon';

const AddSpellsButton = ({ level }) => {
  return (
    <button className={style.addCard}>
      <Icon name="plus"></Icon> Add Spells
    </button>
  );
};

export default AddSpellsButton;
