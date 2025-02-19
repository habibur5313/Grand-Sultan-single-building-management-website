import React from "react";

const FAQ = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold lg:text-4xl mt-20 mb-10 lg:font-bold text-center uppercase text-purple-600">
       Frequently Asked Questions
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 bg-base-200 border"
      >
        <div className="collapse-title text-xl font-medium">
          What services do you offer?
        </div>
        <div className="collapse-content">
          <p>
            We provide a comprehensive range of building management services,
            including maintenance, security, tenant management, and financial
            reporting.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 bg-base-200 border mt-4"
      >
        <div className="collapse-title text-xl font-medium">
        How can I request maintenance or report an issue?
        </div>
        <div className="collapse-content">
          <p>
          You can request maintenance or report any issues through our online portal or by contacting our customer service team directly.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 bg-base-200 border mt-4"
      >
        <div className="collapse-title text-xl font-medium">
        What are the payment options for rent and other fees?
        </div>
        <div className="collapse-content">
          <p>
          We offer multiple payment options, including online payments through our website, direct bank transfers, and traditional methods like checks.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 bg-base-200 border mt-4"
      >
        <div className="collapse-title text-xl font-medium">
        How do I access my tenant portal?
        </div>
        <div className="collapse-content">
          <p>
          You can access your tenant portal by logging in with your unique username and password on our website. If you have trouble logging in, please contact our support team for assistance.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border-base-300 bg-base-200 border mt-4"
      >
        <div className="collapse-title text-xl font-medium">
        What should I do in case of an emergency?
        </div>
        <div className="collapse-content">
          <p>
          In case of an emergency, please contact our 24/7 emergency hotline immediately. For non-urgent matters, you can use the online portal or contact our office during business hours.
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
