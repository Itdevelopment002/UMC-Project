import React from 'react';
import './Commissioner.css';
import Commissionerimg from "../../assets/images/commissioner/unnamed 1.png";
import cicon1 from '../../assets/images/commissioner/Vector.png'
import cicon2 from '../../assets/images/commissioner/Vector (1).png'
import cicon3 from '../../assets/images/commissioner/Vector (3).png'
import cicon4 from '../../assets/images/commissioner/Vector (5).png'
import cicon5 from '../../assets/images/commissioner/Vector (6).png'
import cicon6 from '../../assets/images/commissioner/Vector (7).png'

import { Link } from 'react-router-dom';
const Commissioner = () => {

    const menuItems = [
        "Citizens' Charters",
        "Corporators",
        "Submit Tenders",
        "Quotations",
        "Budget",
        "Department",
        "Ward Offices",
        "Circulars",
    ];

    return (
        <>
            <div className="history-header-image">
            </div>

            <div className="container-fluid font-location mt-2 mb-5" id='commissioner-css'>
                <nav className="breadcrumb">
                    <Link to="/" className="breadcrumb-item text-decoration-none">
                        Home
                    </Link>
                    <Link to="#" className="breadcrumb-item text-decoration-none">
                        About UMC
                    </Link>
                    <span className="breadcrumb-item active1">Commissioner</span>
                </nav>
                <h2 className="location-title">
                    <span className="highlight">Commissioner</span>
                    <span className="highlighted-text"> of UMC</span>
                </h2>

                <div className="row mt-4">
                    {/* Left Panel */}
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                        <div className="commison-profile-card text-center">
                            <img
                                src={Commissionerimg}
                                alt="Commissioner"
                                className="commison-profile-image"
                            />
                        </div>
                        <div className="col-lg-12 col-sm-12 col-12">
                            <ul className="list-group list-group-styling">
                                {menuItems.map((item, index) => (
                                    <li className="list-group-item custom-list-item" key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                        <div className="details-card">
                                    <div className="commissioner-row">
                                        <div className="commissioner-col">
                                            <div className="commissioner-item">
                                                <div className="icon-box">
                                                    <img src={cicon1} alt="icon" className="icon-image" />
                                                </div>
                                                <div className="text-box">
                                                    <strong className="label">Commissioner Name :</strong>
                                                    <span className="value"> Mr. Vikas Dhakane</span>
                                                </div>
                                            </div>
                                            <div className="commissioner-item">
                                                <div className="icon-box">
                                                    <img src={cicon2} alt="icon" className="icon-image" />
                                                </div>
                                                <div className="text-box">
                                                    <strong className="label">Designation :</strong>
                                                    <span className="value"> Commissioner of the Ulhasnagar Municipal Corporation</span>
                                                </div>
                                            </div>
                                            <div className="commissioner-item">
                                                <div className="icon-box">
                                                    <img src={cicon3} alt="icon" className="icon-image" />
                                                </div>
                                                <div className="text-box">
                                                    <strong className="label">Education Qualification :</strong>
                                                    <span className="value"> M.A.(Eco), B.Sc. (Agri), L.L.B.</span>
                                                </div>
                                            </div>
                                            <div className="commissioner-item">
                                                <div className="icon-box">
                                                    <img src={cicon4} alt="icon" className="icon-image" />
                                                </div>
                                                <div className="text-box">
                                                    <strong className="label">Office Address :</strong>
                                                    <span className="value"> 1st Floor, Ulhasnagar Municipal Corporation, Ulhasnagar -4.</span>
                                                </div>
                                            </div>
                                            <div className="commissioner-item">
                                                <div className="icon-box">
                                                    <img src={cicon5} alt="icon" className="icon-image" />
                                                </div>
                                                <div className="text-box">
                                                    <strong className="label">Phone Number :</strong>
                                                    <span className="value"> 0251-2720105</span>
                                                </div>
                                            </div>
                                            <div className="commissioner-item">
                                                <div className="icon-box">
                                                    <img src={cicon6} alt="icon" className="icon-image" />
                                                </div>
                                                <div className="text-box">
                                                    <strong className="label">Email Address :</strong>
                                                    <span className="value"> commissioner@umc.gov.in</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            
                                <div className='commisioner-overview'>
                                    <h4>Brief Overview of the Commissioner</h4>
                                </div>
                                <p>
                                    The current Commissioner of the Ulhasnagar Municipal Corporation
                                    is Mr. Vikas Dhakne. His office is located on the first floor of
                                    the Ulhasnagar Municipal Corporation in Ulhasnagar-4.
                                </p>
                                <p>
                                    Mr. Dhakne is a 2008 batch civil services officer with a diverse
                                    academic background. He has an M.A. in Economics, a B.Sc. in
                                    Agriculture, and an L.L.B. Before becoming the Commissioner, he
                                    worked in the Indian Railway Service and as the Additional
                                    Commissioner in the Pimpri Chinchwad Municipal Corporation and
                                    Pune Municipal Corporation.
                                </p>
                                <p>
                                    The Municipal Commissioner is the chief executive of the
                                    Municipal Corporation and is responsible for implementing the
                                    decisions made by the standing committee and the Municipal
                                    council. The State Legislature appoints the Municipal
                                    Commissioner.
                                </p>
                            </div>
                        </div>
             
                </div>

            </div>
        </>
    );
};

export default Commissioner;
