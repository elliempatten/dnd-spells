import React, { useState } from 'react';
import style from './add-spells-bar.module';

const AddSpellsBar = ({ level }) => {
  return <button className={style.addSpellsBar}>+ Add Spells</button>;
};

export default AddSpellsBar;
