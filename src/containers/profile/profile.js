import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import 'react-datepicker/dist/react-datepicker.css';
import Bio from './../../components/profile/Bio/Bio'
import Email from './../../components/profile/Email/Email'
import Password from './../../components/profile/Password/Password'
import './../../components/profile/profile.css'

const tabItems = [
    {key: 0, name: 'Profil'},
    {key: 2, name: 'Email'},
    {key: 3, name: 'Lösenord'}
];

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: true,
            activeTab: 'Profil',
            buttonIsLoading: false
        };
    }
    changeTab(tab) {
        this.setState({activeTab: tab.name});
    }
    render() {
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
                    <img src={this.props.profile.img} alt='' className='profile-img'/>
                    <h1 className='title is-1'>{this.props.profile.name}</h1>
                    <br />
                    <TabPanel><Bio/></TabPanel>
                    <TabPanel><Email/></TabPanel>
                    <TabPanel><Password/></TabPanel>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps)(ProfileContainer)
