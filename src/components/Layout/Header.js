import React, {Fragment}from 'react';

import mealsImage from '../../assets/meals.jpg'

export default function Header(props) {
  return (
    <Fragment>
        <header>
        <h1>Meals</h1>
        <button>Cart</button>
        </header>
        <div>
            <img src={mealsImage}/>
        </div>
    </Fragment>
  )
}
