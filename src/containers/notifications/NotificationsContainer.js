import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotifications } from './../../services/notifications'
import { updateHeart } from './../../services/user'
import { fetchNotifications, updateHeartStatus } from './../../actions/notification'
import { Notification } from './../../components/notification/Notification'

const heartStatus = {
    pending: 0,
    approved: 1,
    denied: 2
}

class NotificationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false};
    }

    componentWillMount() {
        getNotifications()
            .then((response) => {
                this.props.dispatch(fetchNotifications(response.data));
            });
    }

    handleUpdateHeart(userId, status) {
        this.setState({loading: true});
        updateHeart(userId, heartStatus[status])
            .then((response) => {
                this.props.dispatch(updateHeartStatus(response.data));
                this.setState({loading: false});
            });
    }

    render() {
        let notifications = this.props.notification;
        if (notifications.length === 0) {
            return null;
        }
        return (
            <div>
                {notifications.data.map(notification => (
                    <Notification key={notification.user.id} notification={notification} handleUpdateHeart={this.handleUpdateHeart.bind(this)} heartStatus={heartStatus} loading={this.state.loading}/>
                ))}
            </div>
        );
  }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(NotificationsContainer)