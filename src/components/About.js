import React from 'react';
import './About.css';
import PanelItem from './PanelItem';

function About() {
  return (
    <div className='about'>
      <div className='about_container'>
      <h1>What is BoredRAT?</h1>
      <div className='about_section'>
      <p className='about_text'>
        BoredRAT is a P2E arcade game. Outrun the angry exterminators, defeat your opponents and collect as many tokens as you can, running through an endless maze as fast as possible.
      </p>
      </div>
    </div>
      <div className='panels__container'>
        <div className='panels__wrapper'>
          <ul className='panels__items'>
            <PanelItem
              text='Earn tokens simply by playing the game'
              number='1'
            />
            <PanelItem
              text='Play with your friends in PvP mode'
              number='2'
            />
            <PanelItem
              text='Spend your tokens on NFTs, stack or swap on DEX'
              number='3'
            />
          </ul>
          <ul className='panels__items'>
            <PanelItem
              text='Equip NFTs to increase your chances at wining'
              number='4'
            />
            <PanelItem
              text='Open lootboxes with unique NFTs'
              number='5'
            />
            <PanelItem
              text='Trade NFTs on marketplace'
              number='6'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
