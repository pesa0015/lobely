import React, { Component } from 'react'

class RadioGroup extends Component {
    render() {
        const { input, meta, options } = this.props
        const hasError = meta.touched && meta.error;

        return (
            <div>
                    {options.map(o => <div key={o.value}><label><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label></div>)}
                    {hasError && <div className="error notification is-primary">{meta.error}</div>}
            </div>
        );
    }
}

export default RadioGroup;
