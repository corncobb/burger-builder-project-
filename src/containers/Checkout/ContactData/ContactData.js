import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Cameron Cobb',
                address: {
                    street: '',
                    zipCode: '',
                    country: '',
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fast'
        };
        axios.post('/orders.json', order)
            .then(() => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(() => {
                this.setState({ loading: false });
            });
        //console.log(this.props.ingredients);
    }

    render() {
        let form = (
            <form>
                <input
                    name="name"
                    placeholder="Your Name"
                    type="text"
                />
                <input
                    name="email"
                    placeholder="Your Email"
                    type="email"
                />
                <input
                    name="street"
                    placeholder="Street"
                    type="text"
                />
                <input
                    name="postal"
                    placeholder="Postal Code"
                    type="number"
                />
                <Button
                    btnType="Success"
                    clicked={this.orderHandler}
                >ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;