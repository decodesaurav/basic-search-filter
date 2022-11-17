import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = filteredMonsters => {
   return <div className='card-list'>
    {
      filteredMonsters.monsters.map(monsters => <Card key={monsters.id} monsters={monsters} />)
    }
   </div>;
};