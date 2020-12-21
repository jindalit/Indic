import React from 'react'
import { Link } from 'react-router-dom';
import { services } from '../../common/constant'

const VideoCard = (props) => {
    const { card } = props
    const getuploadVideoTime = time => {
        var one_day = 1000 * 60 * 60 * 24
        let upload_time = new Date((time.split(' ')[0]).replace(/:/g, '/')).getTime()
        let numDays = Math.round(upload_time - new Date().getTime()) / one_day
        if (numDays > 0) {
            return numDays.toFixed(0)
        }
        // return (Math.round(upload_time - new Date().getTime()) / one_day).toFixed(0)
    }
    return (
        <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card">
                <div className="video-card-image">
                    <a onClick={e => {
                        props.setVideoObject(card, 'timeline')
                    }} href='javascript:void(0)' className="play-icon"><i className="fas fa-play-circle"></i></a>
                    <a onClick={e => {
                        props.setVideoObject(card, 'timeline')
                    }} href='javascript:void(0)' ><img className="img-fluid" src={services.thumbBasePath + 'thumbnails/' + card.v_thumbnail} alt="" /></a>
                    <div className="time">{card.time}</div>
                </div>
                <div className="video-card-body">
                    <div className="video-title">
                        <a onClick={e => {
                            props.setVideoObject(card, 'meta')
                        }} href='javascript:void(0)'>{card.title} </a>
                    </div>
                    <a onClick={e => {
                        props.setVideoObject(card, 'meta')
                    }} href='javascript:void(0)'>
                        <div className="video-view">
                            Tags: {card.tags && card.tags.join()}
                        </div>
                        <div className={`video-page ${card.user === 'verified' ? "text-success" : card.user === 'unverified' ? "text-danger" : "text-warning"}`}>
                            {card.category && card.category.join()} <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title={card.user === 'verified' ? "Verified" : "Unverified"}><i className={`fas fa-check-circle ${card.user === 'verified' ? "text-success" : card.user === 'unverified' ? "text-danger" : "text-warning"}`}></i></a>
                        </div>
                        <div className="video-view">
                            {card.views} views &nbsp;<i className="fas fa-calendar-alt"></i> {card.upload_date} {/* {getuploadVideoTime(card.upload_date)} */}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VideoCard