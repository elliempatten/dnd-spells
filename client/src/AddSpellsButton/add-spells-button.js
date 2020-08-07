import React from 'react';
import { Link, useLocation } from "react-router-dom";
import style from './add-spells-button.module';
import Icon from '../Icon';

const AddSpellsButton = ({ level }) => {
  const location = useLocation();

  return (
    <Link className={style.addCard} to={{
      pathname: `/add-spells/${level}`,
      state: { background: location }
    }}>
      <Icon name="plus"></Icon><p>Add Spells</p>
    </Link>
  );
};

export default AddSpellsButton;
