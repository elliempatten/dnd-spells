import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import style from './add-spells-modal.module';
import AddSpellsModalContent from './add-spells-modal-content';

const filteredSpellsQuery = gql`
  query FilteredSpellsQuery($level: Int!) {
    filteredSpells(level: $level) {
      id
      name
    }
  }
`;

const AddSpellsModal = () => {
  const { level } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(filteredSpellsQuery, {
    variables: { level: parseInt(level) },
  });

  let ModalContent;

  if (loading) {
    ModalContent = <div>...Loading</div>;
  } else if (error || !data || !data.filteredSpells) {
    ModalContent = <div>There was an error fetching spells</div>;
  } else {
    ModalContent = (
      <AddSpellsModalContent level={level} spells={data.filteredSpells} />
    );
  }

  const handleClickAway = () => {
    history.push('/');
  };

  return (
    <div className={style.container}>
      <div className={style.overlay}></div>
      <div className={style.modalContainer} onClick={handleClickAway}>
        <div className={style.modal}>{ModalContent}</div>
      </div>
    </div>
  );
};

export default AddSpellsModal;
