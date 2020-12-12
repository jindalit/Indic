import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../common/header'
import Footer from '../common/footer'
import SideNav from '../common/sidenav'
import { services } from '../common/constant'
import axios from 'axios'
import './style.css'
const Uploadvideo = (props) => {
    const [imgFile, setImgFile] = useState()
    const [imgFiles, setImgFiles] = useState()
    const handleChange = e => {
        e.target.files.length === 1 ? setImgFile(e.target.files[0]) : setImgFiles(e.target.files)
    }
    const handleSubmitFile = () => {
        if (imgFiles) {
            let formData = new FormData();
            for (let i = 0; i < imgFiles.length; i++) {
                formData.append('files[]', imgFiles[i]);
            }
            // formData.append('files', imgFiles);
            axios.post(
                services.baseUrl + services.uploadMultiVideo,
                formData,
                {
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            )
                .then(({ data }) => {
                    const response = JSON.parse(data)
                    sessionStorage.setItem('VideoKeys', response.VideoKeys)
                    alert(response.message + ' with VideoKeys ' + response.VideoKeys);
                    props.history.push('/progress')
                })
        }
        else if (imgFile) {
            let formData = new FormData();
            formData.append('file', imgFile);
            axios.post(
                services.baseUrl + services.uploadVideo,
                formData,
                {
                    headers: {
                        "Content-type": "application/json",
                    },
                }
            )
                .then(({ data }) => {
                    const response = JSON.parse(data)
                    alert(response.message + ' with VideoKey ' + response.VideoKey);
                    props.history.push('/progress')
                })
        }
    }
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

                                    <div class="input-file-container js">
                                        <input class="input-file" id="my-file" type="file" multiple={true} onChange={handleChange} />
                                        <label tabindex="0" for="my-file" class="input-file-trigger">Browse a file...</label>
                                    </div>

                                    <p class="file-return" style={{ "position": "absolute", "margin-top": "10px" }} ></p>

                                </div>
                                <a className="btn btn-outline-primary" style={{ "position": "absolute", "margin-top": "-52px", "padding": "13px", "margin-left": "60px", "font-size": "1em", "font-weight": "600" }} onClick={handleSubmitFile}>Upload Video(s)</a>


                            </div>
                        </div>
                    </div>

                    <Footer /></div></div></div>
    )
}

export default Uploadvideo