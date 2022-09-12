import React from 'react';

function PanelItem(props) {
  return (
    <>
      <li className='panels__item'>
        <div className='panels__item__card'>
          <div className='panels__item__info'>
            <h5 className='panels__item__text'>{props.text}</h5>
          </div>
          <div className='panels_number_field'>
          <h1>{props.number}</h1>
          </div>
        </div>
      </li>
    </>
  );
}

export default PanelItem;
