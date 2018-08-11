import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class PasswordFormSubmit extends Component {
    render() {
        const { handleSubmit, onSubmit } = this.props;

        return (
            <button className="button" type="submit" onClick={handleSubmit(onSubmit)}>Spara</button>
        )
    }
}

export default reduxForm({
    form: 'passwordForm',
})(PasswordFormSubmit);
