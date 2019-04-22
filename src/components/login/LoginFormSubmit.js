import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class LoginFormSubmit extends Component {
    render() {
        const { handleSubmit, onSubmit } = this.props;

        let loading = this.props.loading;

        return (
            <button className={"button is-success " + (loading ? 'is-loading' : '')} disabled={loading} type="submit" onClick={handleSubmit(onSubmit)}>Logga in</button>
        )
    }
}

export default reduxForm({
    form: 'loginForm'
})(LoginFormSubmit);
