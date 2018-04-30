import React from 'react';
import { connect } from 'react-redux';
import { getBride } from '../actions/bride';
import { Link } from 'react-router-dom';

class ClientDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));
        console.log(this.props.bride);
    
    }

    render() {
        let firstName, lastName, date, phone, addy, email, notes;
        if(this.props.bride) {
            firstName = this.props.bride.firstName;
            lastName = this.props.bride.lastName;
            date = this.props.bride.weddingDate;
            phone = this.props.bride.phone;
            addy = this.props.bride.location;
            email = this.props.bride.email;
            notes = this.props.bride.notes;
    }

    return (  
    <div className="client-detail">

       <Link to={`/home`}>HOME</Link> <br />
       <Link to={`/edit/${this.props.match.params.id}`}>EDIT</Link> 


    <div className="card">
        <div className="content">
            <div className="deets">
                <h2>{firstName} {lastName}</h2> 
                <p className="date">{date}</p> <br/>
                <p>IMAGE.jpg</p>
                {notes} <br />
                {phone} <br/>
                {addy} <br/>
                {email} <br />
            </div>
        </div>
    </div>





    </div>
        )       
    }
}



const mapStateToProps = (state, props) => ({
    bride: state.bride.currentBride
});


export default connect(mapStateToProps)(ClientDetail);
