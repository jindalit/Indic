import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../common/header'
import Footer from '../../common/footer'
import SideNav from '../../common/sidenav'

class VideoProgress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: [
                {
                    name: 'Abaft',
                    id: 1
                },
                {
                    name: 'Brick',
                    id: 2
                },
                {
                    name: 'Purpose',
                    id: 3
                },
                {
                    name: 'Shallow',
                    id: 4
                }, {
                    name: 'Spray',
                    id: 5
                }, {
                    name: 'Cemetery',
                    id: 6
                }
                , {
                    name: 'Trouble',
                    id: 7
                }, {
                    name: 'Pin',
                    id: 8
                }, {
                    name: 'Fall',
                    id: 9
                }, {
                    name: 'Leg',
                    id: 10
                },
                {
                    name: 'Abaft',
                    id: 11
                },
                {
                    name: 'Brick',
                    id: 12
                },
                {
                    name: 'Purpose',
                    id: 13
                },
                {
                    name: 'Shallow',
                    id: 14
                }, {
                    name: 'Spray',
                    id: 15
                }, {
                    name: 'Cemetery',
                    id: 16
                }
                , {
                    name: 'Trouble',
                    id: 17
                }, {
                    name: 'Pin',
                    id: 18
                }, {
                    name: 'Fall',
                    id: 19
                }, {
                    name: 'Leg',
                    id: 20
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <SideNav></SideNav>
                    <div id="content-wrapper">

                        <div className="container-fluid upload-details">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-title">
                                        <h6>Uploading media file
</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="imgplace"></div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="osahan-title">Demo Video 1 </div>
                                    <div className="osahan-size">102.6 MB . 2:13 MIN Remaining</div>
                                    <div className="osahan-progress">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ "width": "75%" }}></div>
                                        </div>
                                        <div className="osahan-close">
                                            <a href="#"><i className="fas fa-times-circle"></i></a>
                                        </div>
                                    </div>
                                    <div className="osahan-desc">Your Video is still uploading, please keep this page open until it's done.</div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="osahan-form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label for="e1">Video Title</label>
                                                    <input type="text" placeholder="2020-06-20 02-31-01" id="e1" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label for="e2">About</label>
                                                    <textarea rows="3" id="e2" name="e2" className="form-control">Description</textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label for="e9">Language in Video (Optional)</label>
                                                    <select id="e9" className="custom-select">
                                                        <option>English</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label for="e4">Privacy Settings</label>
                                                    <select id="e4" className="custom-select">
                                                        <option>Public</option>
                                                        <option>Private</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label for="e4">Language Model</label>
                                                    <select id="e4" className="custom-select">
                                                        <option>Default</option>
                                                    </select>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label for="e7">Tags (13 Tags Remaining)</label>
                                                    <input type="text" placeholder="Gaming, PS4" id="e7" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-lg-12">
                                                <div className="main-title">
                                                    <h6>Category ( you can select upto 6 categories )</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row category-checkbox">
                                            {
                                                this.state.category.map(item => {
                                                    return <div className="col-lg-2 col-xs-6 col-4 custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id={"customCheck" + item.id} />
                                                        <label className="custom-control-label" for={"customCheck" + item.id}>{item.name}</label>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="terms text-center">
                                        <p className="mb-0"> <input type="checkbox" /> By checking this box, I certify that use of any facial recognition functionality in this service is not by or for a police department in the United States, and I represent that I have all rights (and individuals’ consents, where applicable) to use and store the file/data, and agree that it will be handled per the Online Services Terms and the Privacy Statement.</p>

                                    </div>
                                    <div className="osahan-area text-center mt-3">
                                        <Link className="btn btn-outline-primary" to="Timeline">Save Changes</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer /></div></div></div>
        )
    }
}

export default VideoProgress