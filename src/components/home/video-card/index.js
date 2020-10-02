import React from 'react'


const VideoCard = (props) => {
    const { card } = props
    return (
        <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card">
                <div className="video-card-image">
                    <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                    <a href="#"><img className="img-fluid" src={card.src} alt="" /></a>
                    <div className="time">{card.time}</div>
                </div>
                <div className="video-card-body">
                    <div className="video-title">
                        <a href="#">{card.title} </a>
                    </div>
                    <div className={`video-page ${card.user === 'verified' ? "text-success" : card.user === 'unverified' ? "text-danger" : "text-warning"}`}>
                        Education <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title={card.user === 'verified' ? "Verified" : "Unverified"}><i className={`fas fa-check-circle ${card.user === 'verified' ? "text-success" : card.user === 'unverified' ? "text-danger" : "text-warning"}`}></i></a>
                    </div>
                    <div className="video-view">
                        {card.views} views &nbsp;<i className="fas fa-calendar-alt"></i> {card.createdOn}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard