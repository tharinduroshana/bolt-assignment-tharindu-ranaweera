import React from "react";
import "./DescriptionSection.css";

const DescriptionSection = () => {
    const isMobile = window.innerWidth < 992;
    return (
        <div className="col-lg-8 description-section">
            <h1 className="description-title">Make money driving with Bolt</h1>
            <div className="description-text">Become a Bolt driver, set your schedule and earn extra money by driving!</div>
            {isMobile ? null : (<a href="#">
                <div className="more-info">Learn more <span className="more-info-icon"><i
                    className="fa-solid fa-chevron-down"/></span></div>
            </a>)}
        </div>
    )
}

export default DescriptionSection;