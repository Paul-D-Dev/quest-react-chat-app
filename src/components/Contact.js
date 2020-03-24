import React from 'react';
import './style/Contact.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online: this.props.online
        }
    }

    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} alt="this.props.avatar" className="avatar"/>
                <div className="info">
                    <p className="name">{this.props.name}</p>
                    <div className="status" onClick={event => {
                        this.setState({online : !this.state.online})
                    }}>
                        {this.state.online ? 
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
    
}
        
        
export default Contact;