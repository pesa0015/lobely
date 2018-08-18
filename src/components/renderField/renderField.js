import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="field">
        <label className="label left">{label}</label>
        <div className="control">
            <input className="input" {...input} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

export default renderField;
