import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory, NavLink } from 'react-router-dom';
import axios from 'axios'


export default function Header(props) {

    return (
        <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
            &nbsp;&nbsp;
            <button className="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle">
                <i className="fas fa-bars"></i>
            </button> &nbsp;&nbsp;
            <a className="navbar-brand mr-1" href="index.html"><img className="img-fluid" alt="" src="img/logo.png" /></a>

            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <div className="input-group-append">
                        <button className="btn btn-light" type="button">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
                <li className="nav-item mx-1">
                    <a className="nav-link" href="upload.html">
                        <i className="fas fa-fw fa-cloud-upload-alt"></i>
Upload Video
</a>
                </li>
                <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
                    <a className="nav-link dropdown-toggle user-dropdown-link" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img alt="Avatar" src="img/user.png" />
                                    Admin
</a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="settings.html"><i className="fas fa-fw fa-user-circle"></i> &nbsp; My Account</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><i className="fas fa-fw fa-sign-out-alt"></i> &nbsp; Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
    )

}
Header.propTypes = {
    getRole: PropTypes.string
}