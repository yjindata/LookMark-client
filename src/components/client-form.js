import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { newBride } from '../actions/bride';
import background from '../decor/whitemarble.jpg';
import Input from './input';
import './client.css';

const sectionStyle = {
    width: "100%",
    height: "100VH",
    backgroundImage: `url(${background})`
  };

export class NewClientForm extends React.Component {
    onSubmit(values) {
        const {firstName, lastName, email, phone, weddingDate, location} = values;
        const client = {firstName, lastName, email, phone, weddingDate, location};
        console.log(client);
        // const id = 
        return this.props
          .dispatch(newBride(client))
    }
    render() {
    return (
        <section style={ sectionStyle }>
        <div>
            <Link to="/home">Back</Link>
            <form 
                className="form"
                onSubmit={this.props.handleSubmit(values => 
                    this.onSubmit(values)) }> 
                <Field 
                    component={Input} 
                    type="text" 
                    name="firstName" 
                    placeholder="FIRST NAME"
                /> <br />
 
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastName" 
                    placeholder="LAST NAME"
                /> <br />
  
                <Field 
                    component={Input} 
                    type="email" 
                    name="email" 
                    placeholder="EMAIL"
                /> <br />
          
                <Field 
                    component={Input} 
                    type="number" 
                    name="phone" 
                    placeholder="PHONE"
                /> <br />
    
                <Field 
                    component={Input} 
                    type="text" 
                    name="location" 
                    placeholder="LOCATION"
                /> <br />
                <label htmlFor="weddingDate">WEDDING DATE</label> <br />
                <Field 
                    component={Input} 
                    type="date" 
                    name="weddingDate" 
                /> <br />
                <button
                    className="form-button"
                    type="submit">
                    ADD NEW CLIENT
                </button>
            </form>
        </div>
        </section>
        )
    }  
}


NewClientForm = connect()(NewClientForm)

export default reduxForm ({
    form: 'client',
})(NewClientForm);



