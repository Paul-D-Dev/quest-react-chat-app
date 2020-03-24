import React from 'react';
import PropTypes from 'prop-types';
import './style/Contact.css';


Contact.prototype = {
    name: PropTypes.objectOf(PropTypes.string),
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
}

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} alt="props.avatar" className="avatar"/>
            <div className="info">
                <p className="name">{props.name.firstName + ' ' + props.name.lastName}</p>
                <div className="status">
                    {props.status ? 
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