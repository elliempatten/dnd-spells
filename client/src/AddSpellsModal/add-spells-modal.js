import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import style from './add-spells-modal.module';

const AddSpellsModal = () => {
  const { level } = useParams();
  const history = useHistory();

  const handleClickAway = () => {
    history.push("/");
  }

  return (
    <div className={style.container}>
      <div className={style.overlay}></div>
      <div className={style.modalContainer} onClick={handleClickAway}>
        <div className={style.modal}>
          <h1>Add spells</h1>
          <p>Add level {level} spells</p>
        </div> 
      </div>
    </div>
  )
}

export default AddSpellsModal;
