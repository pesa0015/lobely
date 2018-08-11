import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEmail } from './../../../actions/profile'
import { updateProfile } from './../../../services/profile'
import notyMessage from './../../../services/notyMessage'
import EmailForm from './EmailForm'
import EmailFormSubmit from './EmailFormSubmit'
import ButtonLoading from './../../ButtonLoading/ButtonLoading'

class Email extends Component {
    constructor() {
        super();
        this.state = {isSending: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(value) {
        this.setState({isSending: true});
        let name = this.props.profile.name;
        let email = value.email;
        let gender = this.props.profile.gender;
        let interestedInGender = this.props.profile.interestedInGender;
        let birthDate = this.props.profile.birthDate;
        let bio = this.props.profile.bio;
        let payload = 'name=' + name + '&email=' + email + '&gender=' + gender + '&interestedInGender=' + interestedInGender + '&birthDate=' + birthDate + '&bio=' + bio;
        updateProfile(payload).then((response) => {
            if (response.status === 200) {
                this.setState({isSending: false});
                this.props.dispatch(updateEmail(response.data.email));
                notyMessage('Email uppdaterades');
            }
        });
    }
    render() {
        return (
            <div>
                <h1 className='title'>Ändra email</h1>
                <div>
                    <EmailForm onSubmit={this.handleSubmit}/>
                    {this.state.isSending ? ( <ButtonLoading/> ) : <EmailFormSubmit onSubmit={this.handleSubmit}/> }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps)(Email)
