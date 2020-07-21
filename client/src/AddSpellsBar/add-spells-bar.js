import React, { useState } from 'react';
import style from './add-spells-bar.module';
import ButtonWithIcon from '../ButtonWithIcon';

const AddSpellsBar = ({ level }) => {
  return (
    <ButtonWithIcon icon="plus" size={'large'}>
      Add Spells
    </ButtonWithIcon>
  );
};

export default AddSpellsBar;
