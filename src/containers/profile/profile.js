import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import notyMessage from './../../services/notyMessage'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';
import { getProfile, updateProfile, updatePassword } from './../../services/profile'
import './../../components/profile/profile.css'

const tabItems = [
    {key: 0, name: 'Profil'},
    {key: 1, name: 'Ålder och kön'},
    {key: 2, name: 'Email'},
    {key: 3, name: 'Lösenord'}
];

export default class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false,
            user: {},
            editProfile: false,
            activeTab: 'Profil',
            buttonIsLoading: false,
            currentPassword: null,
            newPassword: null,
            repeatNew: null,
            birthDate: null,
            age: null,
            uploadImg: false,
            interestedInGender: []
        };
    }
    componentWillMount() {
        getProfile().then((response) => {
            this.setState({
                user: response.data,
                hasLoaded: true
            });
            if (this.state.user.birthDate !== 'null') {
                this.setState({age: this.getAge(), birthDate: moment(new Date(response.data.birthDate).toISOString())});
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.changeTab = this.changeTab.bind(this);
            this.changePassword = this.changePassword.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleDateChange = this.handleDateChange.bind(this);
        });
    }
    editProfile() {
        this.setState({editProfile: true});
    }
    getAge() {
        let now = new Date();
        let date = new Date(this.state.user.birthDate);
        let age = now.getFullYear() - date.getFullYear();
        return age;
    }
    updateUser(field, value) {
        let prevState = {...this.state.user};
        this.setState(({
            user: {
                ...prevState,
                [field]: value
            },
            age: this.getAge()
        }));
    }
    handleChange(event) {
        let field = event.target.dataset.name;
        if (event.target.dataset.name === 'interestedInGender') {
            let value = '';
            if (event.target.checked) {
                this.state.interestedInGender.push(event.target.value);
            } else {
                let index = this.state.interestedInGender.indexOf(event.target.value);
                this.state.interestedInGender.splice(index, 1);
            }
            if (this.state.interestedInGender.length === 2) {
                value = 'f/m';
            } else if (this.state.interestedInGender.length === 1) {
                value = this.state.interestedInGender[0];
            }
            this.updateUser(field, value);
        }
        this.updateUser(field, event.target.value);
    }
    handleDateChange(event) {
        let date = moment(event).format('MM/DD/YYYY');
        this.updateUser('birthDate', date);
    }
    handlePasswordChange(event) {
        this.setState({[event.target.dataset.name]: event.target.value});
    }
    handleSubmit() {
        this.setState({buttonIsLoading: true});
        let name = this.state.user.name;
        let email = this.state.user.email;
        let gender = this.state.user.gender;
        let interestedInGender = this.state.user.interestedInGender;
        let birthDate = this.state.user.birthDate;
        let bio = this.state.user.bio;
        let payload = 'name=' + name + '&email=' + email + '&gender=' + gender + '&interested_in_gender=' + interestedInGender + '&birth_date=' + birthDate + '&bio=' + bio;
        updateProfile(payload)
        .then((response) => {
            if (response.status === 200) {
                this.setState({editProfile: false, buttonIsLoading: false});
                notyMessage('<i class="fa fa-check"><span>Ändringen genomfördes</span></i>');
            }
        });
    }
    changePassword() {
        if (this.state.newPassword !== this.state.repeatNew) {
            return false;
        }
        updatePassword(this.state.currentPassword, this.state.newPassword, this.state.repeatNew)
        .then((response) => {
            notyMessage('<i class="fa fa-check"><span>Lösenordet ändrades</span></i>');
        });
    }
    changeTab(tab) {
        this.setState({activeTab: tab.name});
    }
    render() {
        let isLoading = this.state.buttonIsLoading ? 'button is-loading' : 'button';
        if (!this.state.hasLoaded) {
            return null;
        }
    return (
        <div>
            <Tabs className='profile'>
                <div className='tabs is-centered'>
                    <TabList>
                        {tabItems.map((item) => 
                            <Tab className={this.state.activeTab === item.name ? 'is-active' : null} key={item.name} onClick={() => this.changeTab(item)}><a>{item.name}</a></Tab>
                        )}
                    </TabList>
                </div>
                <img src={this.state.user.img} alt='' className='profile-img'/>
                <h1 className='title is-1'>{this.state.user.name}</h1>
                <br />
                <TabPanel className='bio'>
                    {this.state.editProfile ? (
                            <div>
                                <textarea className='textarea' value={this.state.user.bio} data-name='bio' onChange={this.handleChange}/>
                                <a className='button' onClick={this.handleSubmit}>Spara</a>
                            </div>
                        ) : (
                            <div>
                                <span>{this.state.user.bio}</span>
                                <a className={isLoading} onClick={this.editProfile.bind(this)}><i className='fa fa-pencil'><span>Ändra</span></i></a>
                            </div>
                        )
                    }
                </TabPanel>
                <TabPanel>
                    <h3 className='title is-3'>Ålder och kön</h3>
                    <div className='field'>
                        <label className='label left'>Jag föddes {this.state.age !== null ? ('(' + this.state.age + ' år)') : null}</label>
                        
                            { /*<div className='select'>
                                <select value={this.state.birthDate[0]} data-name='month' onChange={this.handleChange}>
                                    <option value='0' key='0' disabled>Månad</option>
                                    {months.map((item) => 
                                        <option value={item.key} key={item.name}>{item.name}</option>
                                    )}
                                </select>
                            </div>
                            */ }
                            { /*<input className='input' type='number' data-name='day' value={this.state.birthDate[1]} onChange={this.handleChange} placeholder='Dag' min='1' max='31' style={{width: '70px'}}/> */ }
                            { /*<input className='input' type='number' data-name='year' value={this.state.birthDate[2]} onChange={this.handleChange} placeholder='År' min='1910' max='2005' style={{width: '100px'}}/> */ }
                            <DatePicker className='input' data-name='birthdate' value={this.state.user.birthDate !== 'null' ? this.state.user.birthDate : ''}
                                selected={this.state.birthDate}
                                showMonthDropdown
                                showYearDropdown
                                onChange={this.handleDateChange}
                            />
                        
                    </div>
                    <div className='to-left'>Jag är</div>
                    <br />
                    <div className='control'>
                        <label className='radio'>
                            <input type="radio" name="gender" data-name='gender' value='f' checked={this.state.user.gender === 'f' ? true : false} onChange={this.handleChange}/>Kvinna
                        </label>
                        <label className='radio'>
                            <input type='radio' name='gender' data-name='gender' value='m' checked={this.state.user.gender === 'm' ? true : false} onChange={this.handleChange}/>Man
                        </label>
                    </div>
                    <br />
                    <div className='to-left'>och söker</div>
                    <br />
                    <p className='to-left'>
                        <input type="checkbox" data-name='interestedInGender' id='search-gender-1' value='f' checked={this.state.user.interestedInGender !== null && this.state.user.interestedInGender.indexOf('f') !== -1 ? true : false} onChange={this.handleChange}/>
                        <label className="checkbox left" htmlFor='search-gender-1'>Kvinna</label>
                    </p>
                    <p className='to-left'>
                        <input type="checkbox" data-name='interestedInGender' id='search-gender-2' value='m' checked={this.state.user.interestedInGender !== null && this.state.user.interestedInGender.indexOf('m') !== -1 ? true : false} onChange={this.handleChange}/>
                        <label className="checkbox left" htmlFor='search-gender-2'>Man</label>
                    </p>
                    <a className='button' onClick={this.handleSubmit}>Spara</a>
                </TabPanel>
                <TabPanel>
                    <h1 className='title'>Ändra email</h1>
                    <form>
                        <input className='input' value={this.state.user.email} data-name='email' onChange={this.handleChange}/>
                    </form>
                    <a className='button' onClick={this.handleSubmit}>Spara</a>
                </TabPanel>
                <TabPanel>
                    <h1 className='title'>Ändra lösenord</h1>
                    <form>
                        <div className='field'>
                            <label className='label left'>Nuvarande lösenord</label>
                            <div className='control'>
                                <input className='input' type='password' data-name='currentPassword' onChange={this.handlePasswordChange}/>
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label left'>Nytt lösenord</label>
                            <div className='control'>
                                <input className='input' type='password' data-name='newPassword' onChange={this.handlePasswordChange}/>
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label left'>Upprepa lösenord</label>
                            <div className='control'>
                                <input className='input' type='password' data-name='repeatNew' onChange={this.handlePasswordChange}/>
                            </div>
                        </div>
                    </form>
                    <a className='button' onClick={this.changePassword}>Spara</a>
                </TabPanel>
            </Tabs>
        </div>
    );
  }
}
