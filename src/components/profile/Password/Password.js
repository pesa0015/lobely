import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePassword } from './../../../services/profile'
import notyMessage from './../../../services/notyMessage'
import PasswordForm from './PasswordForm'
import PasswordFormSubmit from './PasswordFormSubmit'
import ButtonLoading from './../../ButtonLoading/ButtonLoading'

class Password extends Component {
    constructor() {
        super();
        this.state = {isEditing: false, isSending: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(value) {
        this.setState({isSending: true});
        updatePassword(value.currentPassword, value.newPassword, value.repeatPassword).then((response) => {
            if (response.status === 200) {
                this.setState({isEditing: false, isSending: false});
                notyMessage('Ändringen genomfördes');
            }
        });
    }
    render() {
        return (
            <div>
                <h1 className='title'>Ändra lösenord</h1>
                <div>
                    <PasswordForm onSubmit={this.handleSubmit}/>
                    {this.state.isSending ? ( <ButtonLoading/> ) : <PasswordFormSubmit onSubmit={this.handleSubmit}/> }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps)(Password)
