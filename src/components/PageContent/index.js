import React from "react";
import "./PageContent.css";
import DescriptionSection from "../DescriptionSection";
import FormSection from "../FormSection";

const PageContent = () => {
  return (
    <div className="container-fluid page-content">
      <div className="row">
        <DescriptionSection />
        <FormSection />
      </div>
    </div>
  );
};

export default PageContent;
