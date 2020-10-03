import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../common/header'
import Footer from '../common/footer'
import SideNav from '../common/sidenav'
import './style.css'
const Uploadvideo = (props) => {
    return (
        <div>
            <Header />
            <div id="wrapper">
                <SideNav></SideNav>
                <div id="content-wrapper">
                    <div className="container-fluid pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-8 mx-auto text-center upload-video pt-5 pb-5">
                                <i className="fas fa-cloud-upload-alt text-primary" style={{ "font-size": "175px;" }}></i>

                                <h4 className="mt-5">Select Videos files to upload</h4>
                                <p className="land">Select a Directory to upload multiple files...</p>
                                <div class="mt-6" style={{ "margin-left": "180px" }}>
                                    <form action="#">
                                        <div class="input-file-container js">
                                            <input class="input-file" id="my-file" type="file" multiple="" />
                                            <label tabindex="0" for="my-file" class="input-file-trigger">Browse a file...</label>
                                        </div>

                                        <p class="file-return" style={{ "position": "absolute", "margin-top": "10px" }} ></p>
                                    </form>
                                </div>
                                <Link className="btn btn-outline-primary" to="progress" style={{ "position": "absolute", "margin-top": "-52px", "padding": "13px", "margin-left": "60px", "font-size": "1em", "font-weight": "600" }}>Upload Video(s)</Link>


                            </div>
                        </div>
                    </div>

                    <Footer /></div></div></div>
    )
}

export default Uploadvideo