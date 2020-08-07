import React from 'react';

const List = ({ spells }) => {
  return (
    <div>
      {spells.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

const AddSpellsModalContent = ({ level, spells }) => {
  return (
    <div>
      <h1>Add spells</h1>
      <p>Add level {level} spells</p>
      <List spells={spells}></List>
    </div>
  );
};

export default AddSpellsModalContent;
