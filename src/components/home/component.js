import React from 'react'
import PropTypes from 'prop-types'
import Header from '../common/header'
import Footer from '../common/footer'
import SideNav from '../common/sidenav'
import VideoCard from './video-card'
import axios from 'axios'
import { services } from '../common/constant'


export default class HomeMain extends React.Component {
    static propTypes = {
        initLoadData: PropTypes.func.isRequired,
        getInitData: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            videoList: [
                {
                    src: 'img/v1.png',
                    time: '3:50',
                    title: 'Project 1',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'verified'
                },
                {
                    src: 'img/v2.png',
                    time: '3:50',
                    title: 'Project 2',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'unverified'
                },
                {
                    src: 'img/v3.png',
                    time: '3:50',
                    title: 'Project 3',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'pending'
                },
                {
                    src: 'img/v4.png',
                    time: '3:50',
                    title: 'Project 4',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'unverified'
                },
                {
                    src: 'img/v5.png',
                    time: '3:50',
                    title: 'Project 5',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'pending'
                },
                {
                    src: 'img/v6.png',
                    time: '3:50',
                    title: 'Project 6',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'verified'
                },
                {
                    src: 'img/v7.png',
                    time: '3:50',
                    title: 'Project 7',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'unverified'
                }, {
                    src: 'img/v8.png',
                    time: '3:50',
                    title: 'Project 8',
                    views: '1.8M',
                    createdOn: '11 Months ago',
                    user: 'verified'
                }

            ]
        }
    }
    componentDidMount() {
        this.props.initLoadData()

    }

    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <SideNav></SideNav>
                    <div id="content-wrapper">
                        <div class="container-fluid pb-0">  
                            <div class="video-block section-padding">
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
                                            <h6>Library</h6>
                                        </div>
                                    </div>

                                    {this.state.videoList.map(item => <VideoCard card={item} />)}

                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div></div>
        )
    }

}