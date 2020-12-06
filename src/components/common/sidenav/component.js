import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }
    logOut = () => {
        sessionStorage.removeItem('user')
        this.props.history.push('/login')
    }
    render() {
        return (
            <ul className="sidebar navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-home"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-film"></i>
                        <span>Media Files</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-sliders-h"></i>
                        <span>Model Customization</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="settings.html">
                        <i className="fas fa-fw fa-users-cog"></i>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a onClick={this.logOut} className="nav-link" href='javascript:void(0)'>
                        <i className="fas fa-fw fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        )
    }
}

export default withRouter(SideNav)