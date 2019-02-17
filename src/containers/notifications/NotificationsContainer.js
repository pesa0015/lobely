import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotifications } from './../../services/notifications'
import { fetchNotifications } from './../../actions/notification'
import { Notification } from './../../components/notification/Notification'

class NotificationsContainer extends Component {
    componentWillMount() {
        getNotifications()
            .then((response) => {
                this.props.dispatch(fetchNotifications(response.data));
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
                    <Notification key={notification.user.id} notification={notification}/>
                ))}
            </div>
        );
  }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(NotificationsContainer)