import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/boredRat_invisible.png'
              text='Disappear for 5s and avoid your enemey'
              label='Invisible'
            />
            <CardItem
              src='images/boredRat_speed.png'
              text='Move 200% faster and outrun your opponents'
              label='Speed'
            />
            <CardItem
              src='images/boredRat_zap.png'
              text='Paralyze your enemy with an electric shock'
              label='Zzap'
            />
            <CardItem
              src='images/boredRat_fire.png'
              text='Fight exterminators with fireballs'
              label='Fire'
            />
          </ul>
        </div>
      </div>
  );
}

export default Cards;
