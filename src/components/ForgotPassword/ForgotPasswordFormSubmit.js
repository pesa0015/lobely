import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class ForgotPasswordFormSubmit extends Component {
    render() {
        const { handleSubmit, onSubmit } = this.props;

        let loading = this.props.loading;

        return (
            <button className={"button is-success " + (loading ? 'is-loading' : '')} disabled={loading} type="submit" onClick={handleSubmit(onSubmit)}>Skicka</button>
        )
    }
}

export default reduxForm({
    form: 'forgotPasswordForm'
})(ForgotPasswordFormSubmit);
