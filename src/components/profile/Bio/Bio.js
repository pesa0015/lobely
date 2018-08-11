import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateBio } from './../../../actions/profile'
import { updateProfile } from './../../../services/profile'
import notyMessage from './../../../services/notyMessage'
import BioForm from './BioForm'
import BioFormSubmit from './BioFormSubmit'
import ButtonLoading from './../../ButtonLoading/ButtonLoading'

class Bio extends Component {
    constructor() {
        super();
        this.state = {isEditing: false, isSending: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(value) {
        this.setState({isSending: true});
        let name = this.props.profile.name;
        let email = this.props.profile.email;
        let gender = this.props.profile.gender;
        let interestedInGender = this.props.profile.interestedInGender;
        let birthDate = this.props.profile.birthDate;
        let bio = value.bio;
        let payload = 'name=' + name + '&email=' + email + '&gender=' + gender + '&interestedInGender=' + interestedInGender + '&birthDate=' + birthDate + '&bio=' + bio;
        updateProfile(payload).then((response) => {
            if (response.status === 200) {
                this.setState({isEditing: false, isSending: false});
                this.props.dispatch(updateBio(response.data.bio));
                notyMessage('Ändringen genomfördes');
            }
        });
    }
    
    render() {
        let isLoading = this.state.isSending ? 'button is-loading' : 'button';

        return (
            <div>
                {this.state.isEditing ? (
                        <div>
                            <BioForm/>
                            {this.state.isSending ? ( <ButtonLoading/> ) : <BioFormSubmit onSubmit={this.handleSubmit}/> }
                        </div>
                    ) : (
                        <div>
                            <span>{this.props.profile.bio}</span>
                            <a className={isLoading} onClick={() => this.setState({isEditing: true})}><i className='fa fa-pencil'><span>Ändra</span></i></a>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps)(Bio)
