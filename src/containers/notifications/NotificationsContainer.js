import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'reboron/DropModal'
import { getNotifications } from './../../services/notifications'
import { updateHeart } from './../../services/user'
import { fetchNotifications, updateHeartStatus, removeNotification } from './../../actions/notification'
import Notification from './../../components/notification/Notification'
import MessageForm from './../../components/notification/MessageForm'

const heartStatus = {
    pending: 0,
    approved: 1,
    denied: 2
}

const ref = React.createRef();

const MessageModal = React.forwardRef((props, ref) => (
    <Modal ref={ref} className="message-modal">
        <MessageForm {...props}/>
    </Modal>
));

class NotificationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false, heartApproved: null};
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
                this.props.dispatch(removeNotification());
                this.setState({loading: false});

                if (response.data.status === heartStatus.approved) {
                    this.setState({heartApproved: response.data});
                    ref.current.show();
                }
            });
    }

    render() {
        let notifications = this.props.notification;
        if (notifications.count.hearts === 0) {
            return null;
        }
        return (
            <div>
                <MessageModal {...this.state.heartApproved} ref={ref}/>
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