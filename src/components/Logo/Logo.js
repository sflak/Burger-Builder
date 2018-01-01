import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Syd's Burgs"/>
  </div>
);

export default logo;
