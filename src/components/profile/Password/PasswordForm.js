import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class PasswordForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <div className="field">
                        <label className="label left">Nuvarande lösenord</label>
                        <div className="control">
                            <Field
                                className="input"
                                name="currentPassword"
                                component="input"
                                type="password"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label left">Nytt lösenord</label>
                        <div className="control">
                            <Field
                                className="input"
                                name="newPassword"
                                component="input"
                                type="password"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label left">Upprepa lösenord</label>
                        <div className="control">
                            <Field
                                className="input"
                                name="repeatPassword"
                                component="input"
                                type="password"/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

PasswordForm = reduxForm({
  form: 'passwordForm',
})(PasswordForm);

PasswordForm = connect(
  state => ({
    initialValues: state.profile
  })
)(PasswordForm);

export default PasswordForm;
