import React from 'react'
import { Link } from 'react-router-dom';
import './RTS.css'

const RTS = () => {
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
        { Srno: "01", Advertise: "Maharashtra Right to Public Service Act, 2015", Posting: "View PDF" },
        { Srno: "02", Advertise: "Maharashtra Public Service Right Act Rules Gazette", Posting: "View PDF" },
        { Srno: "03", Advertise: "List of services notified under the Right to Public Services Act", Posting: "View PDF" },
        { Srno: "04", Advertise: "Online Marriage Certificate", Posting: "View PDF" },
        { Srno: "05", Advertise: "Fire NOC", Posting: "View PDF" },
        { Srno: "06", Advertise: "Pandal Permission App", Posting: "View PDF" },
        { Srno: "07", Advertise: "Divyaang Yojana App", Posting: "View PDF" },
        { Srno: "08", Advertise: "BIomatric AppDuty attendance system", Posting: "View PDF" },
        { Srno: "09", Advertise: "Service Book system", Posting: "View PDF" },
    ];

    return (
        <>
            <div className="history-header-image">
            </div>

            <div className="container-fluid font-location mt-2 mb-5" id='rts-css'>
                <nav className="breadcrumb">
                    <Link to="/" className="breadcrumb-item text-decoration-none">
                        Home
                    </Link>
                    <Link to="#" className="breadcrumb-item text-decoration-none">
                        About UMC
                    </Link>
                    <span className="breadcrumb-item active1">Right to Service Act 2015</span>
                </nav>
                <h2 className="location-title">
                    <span className="highlight">Right to Service </span>
                    <span className="highlighted-text">Act 2015</span>
                </h2>
                <hr />
                <p>
                    The Maharashtra Right to Public Services Act, 2015 has been passed to provide the notified services provided by the government and all public authorities under the government to the citizens of the state of Maharashtra in a transparent, dynamic and prescribed time frame and it has come into force from 28.04.2015. Its objective is to provide services to the citizens in an easy and time-bound manner. To monitor, coordinate, and monitor whether the notified services are being provided to the citizens or not and to suggest improvements in this regard, the Maharashtra State Right to Public Services Commission has been constituted under the above Act and there is a Chief Commissioner and six Commissioners working in the Commission. The headquarters of the Commission is at New Administrative Building, opposite the Ministry, Mumbai and there are offices of the Commissioners at the headquarters of the six divisions. If the eligible citizens do not get the service within the prescribed time or if it is denied without proper reason, the concerned can file a first and second appeal against such decision with their superiors and if still not satisfied, a third appeal can be filed with the Commission. The guilty officer will be charged a counter-charge of Rs. A fine of up to Rs. 5000/- may be imposed. The list of notified services provided by this department is given in the attached form. The website of Maharashtra State Right to Services Commission is as follows:- <Link href='https://aaplesarkar.mahaonline.gov.in' style={{ color: '#4674D9' }}>https://aaplesarkar.mahaonline.gov.in</Link>
                </p>
            

            <div className="row">
                <div className="col-12 col-lg-3 col-md-4 col-sm-12 col-12">
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
                    
                    <table className="table table-bordered table-responsive shadow">
                        <thead className="bg-orange text-white">
                            <tr>
                                <th className="table-heading-styling">
                                    Sr. No.
                                </th>
                                <th className="table-heading-styling">
                                Right to Service Act 2015
                                </th>
                                <th className="table-heading-styling">
                                    Action
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
    )
}

export default RTS