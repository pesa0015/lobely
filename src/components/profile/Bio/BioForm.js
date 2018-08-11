import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

const renderTextArea = ({input, meta: { touched, error, warning }}) => (
    <div>
        <textarea {...input} className="textarea"></textarea>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);

class BioForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <Field
                        className="textarea"
                        name="bio"
                        component={renderTextArea}/>
                </div>
            </form>
        );
    }
}

BioForm = reduxForm({
  form: 'bioForm',
  destroyOnUnmount: false
})(BioForm);

BioForm = connect(
  state => ({
    initialValues: state.profile
  })
)(BioForm);

export default BioForm;
