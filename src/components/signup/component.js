import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css'
import axios from 'axios'
import { services } from '../common/constant'

class Signup extends React.Component {



    static propTypes = {

        fetchProgress: PropTypes.bool
    }
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                first: '',
                last: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    }
    validation = () => {
        const formData = this.state.formData
        let retVal = true
        for (let key in formData) {
            if (formData[key] === ''){
                retVal = false 
                break
            }
        }
        return retVal
    }
    signupuser = (e) => {
        if (this.validation()) {
            axios.post(services.baseUrl + services.register, this.state.formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(({ data }) => {
                const msg = JSON.parse(data).message
                alert(msg)
                if (msg === 'Registered Successfully  !!') {
                    this.props.history.push('/login')
                }

            })
        }
        else {
            alert('Please fill all mandatory fields.')
        }
    }
    myChangeHandler = (event) => {
        var formData = { ...this.state.formData }
        formData[event.target.name] = event.target.value
        this.setState({ formData });
    }

    render() {
        const { fetchProgress } = this.props
        return (
            <div id="wrapper" class="wrapper">
                <div class="fxt-template-animation loaded fxt-template-layout13">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-12 order-md-2 fxt-bg-wrap">
                                <div class="fxt-bg-img">
                                    <div class="fxt-header">
                                        <div class="fxt-transformY-50 fxt-transition-delay-1">
                                            <a href="login-13.html" class="fxt-logo"><img src="img/logo-13.png" alt="Logo" /></a>
                                        </div>
                                        <div class="fxt-transformY-50 fxt-transition-delay-2">
                                            <h1>Welcome To Indic-AI</h1>
                                        </div>
                                        <div class="fxt-transformY-50 fxt-transition-delay-3">
                                            <p>Indic AI : Using Tech and AI for mainstreaming of differently abled An online platform to provide Accessible Education for differently abled.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 order-md-1 fxt-bg-color">
                                <div class="fxt-content">
                                    <h2>Register</h2>
                                    <div class="fxt-form">

                                        <div class="form-group">
                                            <label for="f_name" class="input-label">First Name</label>
                                            <input type="text" id="f_name" class="form-control" name="first" onChange={this.myChangeHandler} placeholder="example name" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <label for="l_name" class="input-label">Last Name</label>
                                            <input type="text" id="l_name" class="form-control" name="last" onChange={this.myChangeHandler} placeholder="example name" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="input-label">Email Address</label>
                                            <input type="email" id="email" class="form-control" name="email" onChange={this.myChangeHandler} placeholder="demo@gmail.com" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="input-label">Password</label>
                                            <input id="password" type="password" class="form-control" onChange={this.myChangeHandler} name="password" placeholder="********" required="required" />
                                            <i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i>
                                        </div>
                                        <div class="form-group">
                                            <label for="c_password" class="input-label">Confirm Password</label>
                                            <input id="c_password" type="password" class="form-control" name="confirmPassword" placeholder="********" required="required" onChange={this.myChangeHandler} />
                                            <i toggle="#c_password" class="fa fa-fw fa-eye toggle-password field-icon"></i>
                                        </div>
                                        <div class="form-group">
                                            <div class="fxt-checkbox-area">
                                                <div class="checkbox">
                                                    <input id="checkbox1" type="checkbox" />
                                                    <label for="checkbox1">I agree with the terms and condition</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button onClick={e => this.signupuser(e)} type="submit" class="fxt-btn-fill">Register</button>
                                        </div>

                                    </div>
                                    <div class="text-center">
                                        <p>Have an account?<Link to="login" class="switcher-text">Log in</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {fetchProgress ? <CircularProgress color="secondary" /> : ''}
            </div>
        )
    }
}

export default withRouter(Signup)