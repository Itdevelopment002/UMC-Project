import React from "react";
import { Link } from "react-router-dom";
import "./Recruitment.css";

const Recruitment = () => {
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
    const employeesData1 = [
        { Srno: "01", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "02", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "03", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "04", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "05", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "06", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "07", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "08", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
        { Srno: "09", Advertise: "Public notice about walk in interview at UMC", Posting: "12-10-2024" },
    ];
    return (
        <>
            <div className="history-header-image"></div>
            <div className="container-fluid font-location mt-4 mb-5" id="rec-css">
                <nav className="breadcrumb">
                    <Link to="/" className="breadcrumb-item text-decoration-none">
                        Home
                    </Link>
                    <Link to="#" className="breadcrumb-item text-decoration-none">
                        About UMC
                    </Link>
                    <span className="breadcrumb-item active1">Recruitment</span>
                </nav>

                <div className="row">
                    <div className="col-12 col-lg-3 col-md-4 col-sm-12 col-12">
                        <div>
                            <h2 className="location-title">
                                <span className="highlight">Jobs</span>
                                <span className="highlighted-text"> @ UMC</span>
                            </h2>
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
                    <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div>
                            <h2 className="new-location-title">
                                <span className="new-highlight">UMC</span>
                                <span className="new-highlighted-text"> is looking for candidates for following post's</span>
                            </h2>
                            <hr />
                        </div>
                  
                        <table className="table table-bordered table-responsive shadow">
                            <thead className="bg-orange text-white">
                                <tr>
                                    <th className="table-heading-styling">
                                        Sr. No.
                                    </th>
                                    <th className="table-heading-styling">
                                        Advertisement
                                    </th>
                                    <th className="table-heading-styling">
                                        Posting Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeesData1.map((item, index) => (
                                    <tr key={index}>
                                        <td
                                        className="font-large"
                                            width="10%"
                                            style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                color: "#292D32",
                                               
                                            }}
                                        >
                                            {item.Srno}
                                        </td>
                                        <td
                                            width="70%"
                                            style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                color: "#000000",
                                            }}
                                        >
                                            {item.Advertise}
                                        </td>
                                        <td
                                            width="20%"
                                            style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                color: "#9D9D9D",
                                            }}
                                        >
                                            {item.Posting}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Recruitment;
