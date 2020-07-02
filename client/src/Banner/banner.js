import React from 'react';

const Banner = () => {
  const imageUri =
    'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0
      }}
    >
      <h1
        style={{
          color: 'white',
          position: 'absolute',
          padding: 0,
          margin: '0 0 0 20px'
        }}
      >
        Spells
      </h1>
      <img
        src={imageUri}
        alt={'wizard mixing potion in cauldron'}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      ></img>
    </div>
  );
};

export default Banner;
