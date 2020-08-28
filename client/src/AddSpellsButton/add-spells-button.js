import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './add-spells-button.module';
import Icon from '../Icon';
import { SIZES } from '../ButtonWithIcon/button-with-icon';

const AddSpellsButton = ({ level }) => {
  const location = useLocation();

  return (
    <Link
      className={style.addButton}
      style={{ width: `${SIZES.medium}px` }}
      to={{
        pathname: `/add-spells/${level}`,
        state: { background: location },
      }}
    >
      <Icon name="plus"></Icon>
      Add Spells
    </Link>
  );
};

export default AddSpellsButton;
