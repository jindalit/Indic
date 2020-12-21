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
            videoList: []
        }
    }
    componentDidMount() {
        this.props.initLoadData()

        axios.post(
            services.baseUrl + services.getList,
            {
                "info": "YES"
            },
            {
                headers: {
                    "Content-type": "application/json",
                },
            }
        )
            .then(({ data }) => {
                this.setState({ videoList: JSON.parse(data).videoProperties })
            })
    }
    setVideoObject = (item, type) => {
        this.props.setVideo(item)
        if (type === 'meta') {
            this.props.history.push('/progress')
        } else{
            this.props.history.push('/timeline')
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <SideNav></SideNav>
                    <div id="content-wrapper">
                        <div className="container-fluid pb-0">
                            <div className="video-block section-padding">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title">
                                            <div className="btn-group float-right right-action">
                                                <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                                                </div>
                                            </div>
                                            <h6>Library</h6>
                                        </div>
                                    </div>

                                    {this.state.videoList ? this.state.videoList.map(item => <VideoCard setVideoObject={(item, type) => {
                                        this.setVideoObject(item, type)
                                    }} card={item} />) : ''}

                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div></div >
        )
    }

}