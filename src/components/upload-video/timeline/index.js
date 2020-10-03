import React from 'react'
import Header from '../../common/header'
import Footer from '../../common/footer'
import SideNav from '../../common/sidenav'


const Timeline = (props) => {

    return (
        <div>
            <Header />
            <div id="wrapper">
                <SideNav></SideNav>
                <div id="content-wrapper">
                    <div class="container-fluid pb-0">
                        <div class="video-block section-padding">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="single-video-left">
                                        <div class="single-video">
                                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/jWa6fW5rj2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                        <div class="single-video-title box mb-3">
                                            <h2><a href="#">IoT Farming by LGF</a></h2>
                                            <p class="col-md-3" style={{ "margin-left": "-15px" }}>
                                                <select class="form-control">
                                                    <option>Private</option>
                                                    <option>Public</option>
                                                </select>
                                            </p>
                                            <span class="col-md-6" style={{ "margin-left": "150px", "margin-top": "-42px", "position": "absolute" }}>Created one hour ago by Abhishek</span>


                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="single-video-right">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="main-title">
                                                    <div class="btn-group float-right right-action">
                                                        <a href="#" class="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Sort by <i class="fa fa-caret-down" aria-hidden="true"></i>
                                                        </a>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a class="dropdown-item" href="#"><i class="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                                            <a class="dropdown-item" href="#"><i class="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                                            <a class="dropdown-item" href="#"><i class="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                                        </div>
                                                    </div>
                                                    <h6>TimeLine</h6>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="video-card video-card-list">
                                                    <div class="video-card-body">
                                                        <div class="video-view">
                                                            <div class="video-title">
                                                                <a href="#" style={{ "font-weight": "400" }} contentEditable="true" title="Click here to Edit Text"><span style={{ "background": "#e5dddd", "display": "inline-block", "padding": "3px" }}>00.00.00</span> &nbsp;&nbsp;&nbsp;With over 50% of the total population engaged in agricultural activities,</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></div></div></div></div></div></div>
                    <Footer />
                </div></div></div>
    )
}

export default Timeline