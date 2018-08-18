import React from 'react'

const renderTextArea = ({input, meta: { touched, error, warning }}) => (
    <div>
        <textarea {...input} className="textarea"></textarea>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
);

export default renderTextArea;
