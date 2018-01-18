import React, { Component } from 'react';

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import axios from '../../../axios-orders';
import classes from "./ContactData.css"

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
          ingredients: this.props.ingredients,
          // should really calculate price on server
          price: this.props.price,
          customer: {
            name: 'Sydney Flak',
            address: {
              street: 'Teststreet',
              zipCode: '84493',
              country: 'United States'
            },
            email: 'test@test.com'
          },
          deliveryMethod: 'fastest'
        }
        // .json for firebase
        axios.post('/orders.json', order)
          .then( response => {
            this.setState({ loading: false });
            this.props.history.push('/');
          })
          .catch(error => {
            this.setState({ loading: false });
        });

    }

	render () {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder='Name' />
                <input className={classes.Input} type="email" name="email" placeholder='Email' />
                <input className={classes.Input} type="text" name="street" placeholder='Street' />
                <input className={classes.Input} type="text" name="postalCode" placeholder='Postal Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
		return (
            <div className={classes.ContactData}>
                {form}
            </div>
		);
    }
}

export default ContactData;
