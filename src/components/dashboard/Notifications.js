import React from "react";
import moment from "moment";

const Notifications = (props) => {
    const {notifications} = props;
    console.log(notifications)
    return (
        <div className="section">
            <div className="card z-index-0">
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                        <ul className="notifications">
                            {notifications && notifications.map(notification => {
                                return (
                                    <li key={notification.id}>
                                        <span className="pink-text">
                                            {notification.user}&nbsp;
                                        </span>
                                        <span>
                                            {notification.content}
                                        </span>
                                        <div className="grey-text note-date">
                                            {moment(notification.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Notifications
