// App.js
import React from 'react';
import './Info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import video1 from '../../assets/images/info/Group 14.png'
import playicon from '../../assets/images/info/Group 15.png'

function Info() {
    return (
        <div className="container-fluid my-5">
            <div className="row align-items-center">
                <div className="col-md-8 info-card1">
                    <div className="blue-line mb-3"></div>
                    <h1 className="info-heading1">Welcome to</h1>
                    <h2 className="info-heading2 fw-bold">Ulhasnagar Municipal Corporation</h2>
                    <p className='description'>
                        Ulhasnagar is a municipal town and the headquarters of the Tahsil bearing the same name.
                        It is a railway station on the Mumbai-Pune route of the Central Railway.
                        Ulhasnagar, a colony of migrants in the aftermath of Partition, is 43 years old.
                    </p>
                    <a href="#." className="see-more-btn">See more Informations &rarr;</a>
                </div>
                <div className="col-md-4">
                    <div className="position-relative">
                        <img
                            src={video1}
                            alt="Ulhasnagar Municipal Corporation"
                            className="img-fluid rounded"
                        />
                        <button className="btn play-button position-absolute top-50 start-50 translate-middle">
                            <img src={playicon} alt="Play Icon" className="playicon" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
