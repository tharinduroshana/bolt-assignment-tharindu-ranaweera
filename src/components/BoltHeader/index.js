import React from "react";
import BoltLogo from "../../bolt-logo.svg";
import "./BoltHeader.css";

const BoltHeader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="#">
                    <img src={BoltLogo} width="60" height="30" alt=""/>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Ride
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Become a driver
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Fleet
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Business
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Scooters
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Drive
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Food
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cities
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button
                        className="btn btn-outline-success my-2 my-sm-0 bolt-green-btn login-btn"
                        type="submit"
                    >
                        Log in
                    </button>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default BoltHeader;
