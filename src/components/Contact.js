import React from 'react';
import PropTypes from 'prop-types';
import './style/Contact.css';


Contact.prototype = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
}

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} alt="props.avatar" className="avatar"/>
            <div className="info">
                <p className="name">{props.name}</p>
                <div className="status">
                    {props.online ? 
                        <div>
                            <div className="status-online"></div>
                            <p className="status-text">online</p>
                        </div>
                        :
                        <div>
                            <div className="status-offline"></div>
                            <p className="status-text">offline</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;