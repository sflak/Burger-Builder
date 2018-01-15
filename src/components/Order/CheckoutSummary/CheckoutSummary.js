import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you like it!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
                <Button
                    btnType="Danger"
                    clicked>Cancel</Button>
                <Button
                    btnType="Success"
                    clicked>Cancel</Button>


            </div>
        </div>
    );
};

export default CheckoutSummary;
