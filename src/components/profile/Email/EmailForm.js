import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class EmailForm extends Component {
    render() {
        const { handleSubmit, onSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Field
                        className="input"
                        name="email"
                        component="input"/>
                </div>
            </form>
        );
    }
}

EmailForm = reduxForm({
  form: 'emailForm',
  destroyOnUnmount: false
})(EmailForm);

EmailForm = connect(
  state => ({
    initialValues: state.profile
  })
)(EmailForm);

export default EmailForm;
