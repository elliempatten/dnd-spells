import React from 'react';
import Icon from '../Icon';
import style from './button-with-icon.module';

const SIZES = { small: 60, medium: 90, large: 120 };

const ButtonWithIcon = ({ size, children, icon, onClick }) => {
  return (
    <button
      className={style.button}
      style={{ width: `${SIZES[size]}px` }}
      onClick={onClick}
    >
      <Icon name={icon} />
      {children}
    </button>
  );
};

export default ButtonWithIcon;
