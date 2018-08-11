import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

class Age extends Component {
    render() {
        return (
            <div>
                <h3 className='title is-3'>Ålder och kön</h3>
                <div className='field'>
                    <label className='label left'>Jag föddes {this.props.age !== null ? ('(' + this.props.age + ' år)') : null}</label>
                        <DatePicker className='input' data-name='birthdate' value={this.props.user.birthDate !== 'null' ? this.props.user.birthDate : ''}
                            selected={this.props.birthDate}
                            showMonthDropdown
                            showYearDropdown
                            onChange={this.props.handleDateChange.bind(this)}
                        />
                    
                </div>
                <div className='to-left'>Jag är</div>
                <br />
                <div className='control'>
                    <label className='radio'>
                        <input type="radio" name="gender" data-name='gender' value='f' checked={this.props.user.gender === 'f' ? true : false} onChange={this.props.update.bind(this)}/>Kvinna
                    </label>
                    <label className='radio'>
                        <input type='radio' name='gender' data-name='gender' value='m' checked={this.props.user.gender === 'm' ? true : false} onChange={this.props.update.bind(this)}/>Man
                    </label>
                </div>
                <br />
                <div className='to-left'>och söker</div>
                <br />
                <p className='to-left'>
                    <input type="checkbox" data-name='interestedInGender' id='search-gender-1' value='f' checked={this.props.user.interestedInGender !== null && this.props.user.interestedInGender.indexOf('f') !== -1 ? true : false} onChange={this.props.update.bind(this)}/>
                    <label className="checkbox left" htmlFor='search-gender-1'>Kvinna</label>
                </p>
                <p className='to-left'>
                    <input type="checkbox" data-name='interestedInGender' id='search-gender-2' value='m' checked={this.props.user.interestedInGender !== null && this.props.user.interestedInGender.indexOf('m') !== -1 ? true : false} onChange={this.props.update.bind(this)}/>
                    <label className="checkbox left" htmlFor='search-gender-2'>Man</label>
                </p>
                <a className='button' onClick={this.props.submit.bind(this)}>Spara</a>
            </div>
        );
    }
}

export default Age;
