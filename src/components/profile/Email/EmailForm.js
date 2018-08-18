import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import renderField from './../../renderField/renderField'

class EmailForm extends Component {
    render() {
        const { handleSubmit, onSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Field
                        name="email"
                        component={renderField}
                        type="text"/>
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
