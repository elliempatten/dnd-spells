import React from 'react';
import style from './banner.module';

const Banner = () => {
  const imageUri =
    'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

  return (
    <div className={style.banner}>
      <h1 className={style.heading}>Spells</h1>
      <img
        src={imageUri}
        alt={'wizard mixing potion in cauldron'}
        className={style.image}
      ></img>
    </div>
  );
};

export default Banner;
